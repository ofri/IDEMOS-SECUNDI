

module.exports = function(req,res)
{
    res.render('information_items_main.ejs',{
        url: req.url,
        tag_name:req.query.tag_name,
        layout: false,
        user_logged: req.isAuthenticated(),
        user: req.session.user,
        auth_user: req.session.auth.user,
        avatar_url: req.session.avatar_url
    });

};