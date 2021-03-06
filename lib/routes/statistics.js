(function () {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'os',
        '../../config'
    ];

    define(deps, function (os, config) {
        function RouteStatistics(app) {
            /**
             * Display a message if the webhooks are operational.
             */
            app.get('/statistics', function (req, res) {
                res.render('statistics');
            });
        };

        module.exports = RouteStatistics;
    });
}());
