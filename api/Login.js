
var jest = require('jest')
    ,models = require('../models')
    ,common = require('./common')
    ,async = require('async')
    ,_ = require('underscore');

var Login = module.exports =  jest.Resource.extend({

        init:function () {
            this._super();
            this.allowed_methods = ['post'];
//            this.authentication = new common.SessionAuthentication();
            this.update_fields = {
                email:null,
                password:null
            };

            this.fields = {
                user_id:null,
                first_name:null,
                last_name:null
            };



        },

        create_obj: function(req,fields,callback) {
            req.body['email'] = fields.email;
            req.body['password'] = fields.password;
            req.authenticate('simple',function(err,is_authenticated) {
                if(err)
                    callback(err);
                else {
                    if(!is_authenticated)
                        callback({message:'wrong email or password', code:404});
                    else {
                        callback(null,{

                        });
                    }
                }
            });
        }


    }
)