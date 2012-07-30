
var models = require('../../../models');

module.exports = function(req, res){
    models.Cycle.findById(req.params[0],function(err,cycle) {
        if(err)
            res.render('500.ejs',{error:err});
        else {
            if(!cycle)
                res.render('404.ejs');
            else {
                res.render('cycle.ejs',{
                    cycle:cycle,
                    tab:'cycles'
                });
            }
        }
    });
};
