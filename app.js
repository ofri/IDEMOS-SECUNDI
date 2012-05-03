
/**
 * Module dependencies.
 */
var express = require('express'),
    mongoose = require('mongoose'),
    MongoStore  = require('connect-mongo'),
    auth = require("connect-auth");

var app = module.exports = express.createServer();
var account = require('./routes/account');

app.configure('deliver', function(){
    app.set('views', __dirname + '/deliver/views');
    app.set('public_folder', __dirname + '/deliver/public');
    app.set("port", 80);
    app.set('facebook_app_id', '175023072601087');
    app.set('facebook_secret', '5ef7a37e8a09eca5ee54f6ae56aa003f');
    app.set('root_path', 'http://dev.empeeric.com');
    app.set('DB_URL','mongodb://localhost/uru');
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('development', function(){
    app.set('views', __dirname + '/views');
    app.set('public_folder', __dirname + '/public');
    app.set("port", 80);
    app.set('facebook_app_id', '175023072601087');
    app.set('facebook_secret', '5ef7a37e8a09eca5ee54f6ae56aa003f');
    app.set('root_path', 'http://dev.empeeric.com');
    app.set('DB_URL','mongodb://localhost/uru');
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    require('./compile_templates');

});

app.configure('production', function(){
    app.set('views', __dirname + '/views');
    app.set('public_folder', __dirname + '/public');
    app.set("port", process.env.PORT);
    app.set('facebook_app_id', '375874372423704');
    app.set('facebook_secret', 'b079bf2df2f7055e3ac3db17d4d2becb');
    app.set('root_path', 'http://uru.herokuapp.com');
    app.set('DB_URL',process.env.MONGOLAB_URI);
    app.use(express.errorHandler());
    require('j-forms').setAmazonCredentials({
        key: 'AKIAJM4EPWE637IGDTQA',
        secret: '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',
        bucket: 'uru'
    });
});

mongoose.connect(app.settings.DB_URL);

// Configuration
var confdb = {
    db: require('./utils').split_db_url(app.settings.DB_URL),
    secret: '076ed61d63ea10a12rea879l1ve433s9'
};

app.configure(function(){
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret: confdb.secret,
        maxAge: new Date(Date.now() + 3600000),
        store: new MongoStore(confdb.db) }));
    app.use(account.referred_by_middleware);

    var fbId = app.settings.facebook_app_id,
        fbSecret = app.settings.facebook_secret,
        fbCallbackAddress = app.settings.root_path + '/account/facebooklogin';

    app.use(auth({strategies: [
        account.SimpleAuthentication()
        ,auth.Facebook({
            appId : fbId,
            appSecret: fbSecret,
            callback: fbCallbackAddress,
            scope: 'email',
            failedUri: '/noauth'
        })
    ],
    trace: true,
    logoutHandler: require("connect-auth/lib/events").redirectOnLogout("/acount/login")}));

    app.use(account.auth_middleware);
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(app.settings.public_folder));
    require('j-forms').serve_static(app,express);
});

app.settings.env == 'deliver' ? require('./deliver/routes')(app) : require('./routes')(app);
require('./api')(app);
require('./admin')(app);

var cron = require('./cron');

app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

app.get('/tokens',function(req,res){
    res.send(require('./model/common').getGamificationTokenPrice(req.query.type));
});
