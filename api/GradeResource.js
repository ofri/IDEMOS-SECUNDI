/**
 * Created by JetBrains WebStorm.
 * User: saar
 * Date: 01/03/12
 * Time: 13:54
 * To change this template use File | Settings | File Templates.
 */


var resources = require('jest'),
    og_action = require('../og/og').doAction,
    models = require('../models'),
    async = require('async'),
    common = require('./common'),
    GradeSuggestion = require('./GradeSuggestionResource'),
    _ = require('underscore');
    calc_thresh = require('../deliver/tools/calc_thresh');
    Suggestion = require('./suggestionResource');

//Authorization
var Authoriztion = resources.Authorization.extend({
    edit_object : function(req,object,callback){
    //check if user already grade this discussion

        if(req.method == 'POST' || req.method == 'PUT'){
            models.Discussion.count({"_id": object.discussion_id, "creator_id": req.user._id}, function(err, count){
                if (err){
                    callback(err, null);
                }else{
                    if (count > 0){
                        callback({message:"cant grade your own discussion",code:401}, null);
                    }else{
                        if(req.method == 'PUT'){
                            if(!(object.user_id + "" == req.user._id + ""))
                                callback({message:"its not your garde!",code:401}, null);
                            else
                                callback(null, object);
                        }
                        else{
    //                        object.user_id = req.user._id;
                            callback(null, object);
                        }
                    }
                }
            })
        }else{
            callback(null, object);
        }
    }
});


var GradeResource = module.exports = common.GamificationMongooseResource.extend({
    init:function(){
        this._super(models.Grade,'grade', null);
//        GradeResource.super_.call(this,models.Grade);
        this.allowed_methods = ["get", "put", "post"];
        this.authorization = new Authoriztion();
        this.authentication = new common.SessionAuthentication();
        this.filtering = {discussion_id: {
            exact:null,
            in:null
        }};
        this.fields = {
            _id: null,
            new_grade: null,
            evaluate_counter: null,
            grade_id: null,
            suggestions: {
                _id: null,
                grade: null,
                evaluators_counter: null
            },
            updated_user_tokens: null
        }
    },

    create_obj:function(req,fields,callback)
    {
        var g_discussion;
        var self = this;
        var new_grade = null;
        var counter = 0;
        var threshold;
        var admin_threshold;
        var discussion_thresh;
        var discussion_obj;
        var proxy_power = req.user.num_of_given_mandates ? 1 + req.user.num_of_given_mandates * 1/9 : 1;

        fields.proxy_power = proxy_power;
        fields.user_id = req.user._id;


        self._super(req, fields, function(err, grade_object)
        {
            if(!err){
                /**
                 * Waterfall:
                 * 1) find discussion
                 * 2) calculate discussion grade
                 * 3) find suggestion object
                 * 4) calculate suggestion grades
                 * 5) publish to facebook
                 * Final) set gamification details, return object
                 */
                async.waterfall([

                    // 1) find discussion
                    function(cbk){
                        models.Discussion.findById(grade_object.discussion_id, cbk);
                    },

                    // 2) calculate discussion grade
                    function(_discussion_obj, cbk){
                        discussion_obj = _discussion_obj;
                        //cant grade your own discussion
                        discussion_thresh = Number(discussion_obj.admin_threshold_for_accepting_change_suggestions) || discussion_obj.threshold_for_accepting_change_suggestions
                        if(discussion_obj.creator_id + "" == req.user._id + ""){
                            cbk({message:"cant grade your own discussion",code:401}, null);
                        }else{
                            admin_threshold = discussion_obj.admin_threshold_for_accepting_change_suggestions;
                            calculateDiscussionGrade(grade_object.discussion_id, function(err, _new_grade, evaluate_counter, _threshold){
                                new_grade = _new_grade;
                                counter = evaluate_counter;
                                threshold = _threshold
                                cbk(err, threshold);
                            });
                        }
                    },

                    // 3) find suggestion object
                    //calculate all change suggestion all over again and check if they approved
                    function(threshold, cbk){
                        models.Suggestion.find({discussion_id: grade_object.discussion_id}, ["_id"], function(err, results)
                        {
                            cbk(err, results);
                        });
                    },

                    // 4) calculate suggestion grades
                    function(suggestions, cbk){
//                        var real_threshold = Number(admin_threshold) || threshold;
                        var real_threshold
                        async.forEach(suggestions, function(suggestion, itr_cbk){
                            GradeSuggestion.calculateSuggestionGrade(suggestion._id, grade_object.discussion_id, null, null, discussion_thresh, null, null,function(err, obj){
                                //check if suggestion is over the threshold
                                real_threshold = Number(suggestion.admin_threshold_for_accepting_the_suggestion) || suggestion.threshold_for_accepting_the_suggestion;
                                if(suggestion.agrees && suggestion.agrees.length > real_threshold){

                                    //approveSuggestion.exec()
                                    Suggestion.approveSuggestion(suggestion._id, function(err, obj1){
                                        itr_cbk(err, obj1);
                                    })
                                }else
                                    itr_cbk(err, obj);
                            });}
                        , function(err){
                            cbk(err);
                        });
                    },
                    // 5) publish to facebook
                    function (cbk) {
                        og_action({
                            action: 'rank',
                            object_name:'disscusion',
                            object_url : '/discussions/' + discussion_obj.id,
                            fid : req.user.facebook_id
                        },cbk);
                    }

                ],
                // Final) set gamification details, return object
                function(err, args){
                    req.gamification_type = "grade_discussion";
                    req.token_price = common.getGamificationTokenPrice('create_action') > -1 ? common.getGamificationTokenPrice('create_action') : 0;

                    callback(err, {new_grade: new_grade, evaluate_counter: counter, grade_id: grade_object._id || 0});
                });
            }else{
                callback(err, null);
            }
        });
    },

    update_obj: function(req, object, callback){

        var g_grade;
        var self = this;
        var suggestions = [];
        var discussion_thresh;
        var proxy_power = req.user.num_of_given_mandates ? 1 + req.user.num_of_given_mandates * 1/9 : 1;

        var iterator = function(suggestion, itr_cbk){
            GradeSuggestion.calculateSuggestionGrade(suggestion._id, object.discussion_id, null, null, discussion_thresh, null, null,function(err, sugg_new_grade, sugg_total_counter){
                if(!err){
                    suggestions.push({
                        _id: suggestion._id,
                        grade: sugg_new_grade,
                        evaluators_counter: sugg_total_counter
                    })
                }
                itr_cbk(err, 0);
            });
        }

        object.proxy_power = proxy_power;
        self._super(req, object, function(err, grade_object){
            if(err){
                callback(err, null);
            }else{
                var new_grade, evaluate_counter;
                async.waterfall([

                    function(cbk){
                        g_grade = grade_object;
                        calculateDiscussionGrade(object.discussion_id, function(err, _new_grade, _evaluate_counter){
                            new_grade = _new_grade;
                            evaluate_counter = _evaluate_counter;
                            cbk(err, 0);
                        });
                    },

                    //get discussion threshold so i can update every suggestion threshold
                    function(obj, cbk){
                        models.Discussion.findById(object.discussion_id, cbk);
                    },
                    //maybe do something with suggestion grade
                    //calculate all change suggestion all over again
                    function(discussion_obj,cbk){
                        discussion_thresh = Number(discussion_obj.admin_threshold_for_accepting_change_suggestions) || discussion_obj.threshold_for_accepting_change_suggestions;
                        models.Suggestion.find({discussion_id: grade_object.discussion_id}, ["_id"], function(err, results)
                        {
                            cbk(err, results);
                        });
                    },

                    function(suggestions, cbk){
                        async.forEach(suggestions, iterator, cbk);
                    }

                ], function(err){
                    callback(err, {new_grade: new_grade, evaluate_counter: evaluate_counter, suggestions: suggestions,grade_id: g_grade._id || 0})
                })
            }
        });
    }
});

function calculateDiscussionGrade(discussion_id, callback){

    var count;
    var grade_sum;
    var new_grade;
    var threshold;
    async.waterfall([
        function(cbk){
            models.Grade.find({discussion_id: discussion_id}, ["evaluation_grade", "proxy_power"], cbk);
        },

        function(grades, cbk){
            count = grades.length;
            if(count){
                //calculate grade_sum with take proxy power in consideration
                grade_sum = _.reduce(grades, function(memo, grade){return memo + Number(grade.evaluation_grade * (grade.proxy_power || 1)); }, 0);
                //calculate count with take proxy power in consideration
                count = _.reduce(grades, function(memo, grade){return memo + Number(grade.proxy_power || 1)}, 0);
                new_grade = grade_sum / count;

                //calculate threshhold here
                threshold = calc_thresh.calculating_thresh(count, new_grade) || 50;

                models.Discussion.update({_id: discussion_id}, {$set: {grade: new_grade, evaluate_counter: count, threshold_for_accepting_change_suggestions: threshold}}, cbk);
            }else{
                cbk({message: "you have to grade before changing the grade" , code: 401});
            }
        }
    ],function(err, args){
        callback(err, new_grade, count, threshold);
    })
}