var models = require('../../../models'),
    async = require('async'),
    utils = require('../../../utils');

var hourDifference = function (from, to) {
    // This is a horrible hack to make the JavaScript Date object accept dateless times.
    // It's better than writing the code myself though.
    return new Date('1 Jan 2001 ' + to) - new Date('1 Jan 2001 ' + from);
}

module.exports = {
    get: function (req, res) {
        var id = req.params.cycle_id;
        async.parallel([
            function (callback) {
                models.Cycle.findById(id, callback);
            },
            function (callback) {
                models.ActionResource.find({}, callback);
            },
            function (callback) {
                models.Category.find({}, callback);
            }
        ], function (err, results) {
            var cycle = results[0],
                resources = results[1],
                categories = results[2];

            if (!cycle) {
                console.log('Cycle id ' + id + ' not found; returning 404.');
                res.render('404.ejs');
                return;
            }

            console.log('create action for cycle id ' + id + ': ' + cycle.title);

            var today = utils.dateFormat('yyyy-mm-dd');

            res.render('action_create.ejs', {
                cycle: cycle,
                resources: resources,
                categories: categories,
                today: today
            });
        });
    }
};
