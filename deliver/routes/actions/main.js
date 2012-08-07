
var models = require('../../../models'),
    async = require('async');

module.exports = function(req, res){


    /*
    * 1. get action
    * 2. get "going_users" of action
    *
    *
    *
    * */
    async.parallel([
        function(cbk){
            models.Action.findById(req.params[0])
                .select([
                    '_id',
                    'type',
                    'title',
                    'text_field',
                    'image_field',
                    'tags',
                    'location',
                    'execution_date',
                    'required_participants',
                    'cycle_id'
                 ])
                .exec(cbk);
        },

        function(cbk){
            models.Join.find({action_id: req.params[0]})
                .populate('user_id', ['_id', 'first_name', 'last_name', 'avatar_url', 'num_of_proxies_i_represent', 'score'])
                .exec(cbk);
        }
    ], function(err, args){


        var action = args[0];
        var going_users = args[1];
        //TODO sort going users...

        if(err)
            res.render('500.ejs',{error:err});
        else {

            if(!action)
                res.render('404.ejs');
            else {

               var is_going = false;
               // is user going to action?
               if(req.user){
                   var user_id = req.user._id;
                   is_going = _.any(going_users, function(going_user){ going_user._id + "" == user_id})
               }
               action.is_going = is_going;

                res.render('action.ejs',{
                    action: action,
                    tab: 'actions',
                    going_users: going_users
                });
            }
        }
    });
};
