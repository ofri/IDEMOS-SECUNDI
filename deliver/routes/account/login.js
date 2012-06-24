
var common = require('./common');

module.exports =  function (req, res) {
    if (req.method == 'GET') {
        res.redirect('/account/login');
        return;
//            res.render('login.ejs', {title:'Login',
//                tab:'user',
//                failed:false, exist_username:false, next:req.query.next});
    }
    else {
        if (req.method == 'POST') {
            req.authenticate('simple', function (err, is_authenticated) {
                if (is_authenticated) {
                    var next = req.query.next || common.DEFAULT_LOGIN_REDIRECT;
                    res.redirect(next);
                }
                else {
                    res.send("wrong details, try again", 500);
                }
            });
        }
        else{

            //do something
            console.log('error!')
        }
    }
};