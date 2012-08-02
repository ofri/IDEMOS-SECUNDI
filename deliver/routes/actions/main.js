
var models = require('../../../models'),
    async = require('async');

module.exports = function(req, res){

    async.waterfall([
        function(cbk){
            models.Action.findById(req.params[0])
                .select([
                    '_id',
                    'title',
                    'text_field',
                    'image_field',
                    'tags',
                    'going_users',
                    'location',
                    'execution_date',
                    'required_participants'
                 ])
                .populate('going_users.user_id', ['_id', 'first_name', 'last_name', 'avatar_url', 'num_of_proxies_i_represent', 'score'])
                .exec(cbk);
        }
    ], function(err, action){
        if(err)
            res.render('500.ejs',{error:err});
        else {
            if(!action)
                res.render('404.ejs');
            else {
                res.render('action.ejs',{
                    action:action,
                    tab:'actions'
                });
            }
        }
    });
};