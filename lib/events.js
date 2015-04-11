<<<<<<< HEAD
(function() {
    'use strict';

    var define = require('amdefine')(module);

    var deps = [
        'events'
    ];

    define(deps, function(Events) {
        module.exports = Events.EventEmitter;
    });
}());
=======
(function () {
    'use strict';
    var EventEmitter = require('events').EventEmitter;

    var events = new EventEmitter();

    module.exports = events;
})();
>>>>>>> 8e46d2e8cf908ef4bcf38bd6bf31e1b8ca5ac7d9
