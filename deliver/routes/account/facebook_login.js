var models = require('../../../models')
    ,common = require('./common');


module.exports = function (req, res) {
    function go() {
        req.authenticate("facebook", function (error, authenticated) {
            var next = req.session['fb_next'];
            var referred_by = req.session['referred_by'];
            console.log(error);
            if (authenticated) {

                var user_detailes = req.getAuthDetails().user;
                var access_token = req.session["access_token"];
                var user_fb_id = req.getAuthDetails().user.id;

                isUserInDataBase(user_fb_id, function (is_user_in_db) {

                    if (!is_user_in_db) {
                        user_detailes.invited_by = referred_by;
                        createNewUser(user_detailes, access_token, function (_id) {
                            req.session.user_id = _id;
//                            req.session.auth.user._id = _id; i can delete this
                            req.session.save(function (err, object) {
                                if (err != null) {
                                    console.log(err);

                                } else {
                                    console.log('user _id to session is ok');
                                    res.redirect(next || common.DEFAULT_LOGIN_REDIRECT);
                                }
                            });
                        });
                    } else {

                        updateUesrAccessToken(user_detailes, access_token, function (_id) {
                            req.session.auth.user._id = _id;
                            req.session.save(function (err, object) {
                                if (err != null) {
                                    console.log(err);
                                } else {
                                    console.log('user _id to session is ok');
                                    res.redirect(next || common.DEFAULT_LOGIN_REDIRECT);
                                }

                            });
                        });
                    }
                });
            }
        });
    }

    if (req.query.next) {
        req.session['fb_next'] = req.query.next;
        req.session.save(go);
    }
    else
        go();
};

function isUserInDataBase(user_facebook_id, callback) {

    var user_model = models.User,
        flag = false;

    user_model.find({facebook_id:user_facebook_id}, function (err, result) {
        if (err == null) {
            if (result.length == 1) { // its not a new user
                //var user_id = result[0]._id;
                //console.log("isUserInDataBase returns true")
                flag = true;
            } else {
                if (result.length == 0) { // its a new user
                    //console.log("isUserInDataBase returns false");
                } else { // handle error here
                    throw "Error: Too many users with same user_facebook_id";
                }
            }
        } else {
            throw "Error reading db.User in isNewUser";
        }

        callback(flag);
    });
}

function createNewUser(data, access_token, callback) {

    var user = new models.User();
    user.username = data.username;
    user.identity_provider = "facebook";
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.email = data.email;
    if (data.hometown) {
        user.address = data.hometown.name;
    }
    user.gender = data.gender;
    user.facebook_id = data.id;
    if(data.invited_by)
        user.invited_by = data.invited_by;
    user.access_token = access_token;
    user.save(function (err, object) {
        if (err != null) {
            console.log(err);
        } else {
            callback(object.id);
            console.log("done creating new user - " + user.first_name + " " + user.last_name);
//            res.write("done creating new user - " + user.first_name + " " + user.last_name);
        }
//        res.end();
    });
}

function updateUesrAccessToken(data, access_token, callback) {
    var user_model = models.User;

    user_model.findOne({facebook_id:data.id}, function (err, user) {
        if (err) {
            return next(err);
        }
        user.access_token = access_token;
//            user.session_id = session_id;
        user.save(function (err) {
            if (err) {
                return callback(err);
            } else {
                callback(user.id);
            }
        });
//        res.end();
    });
}