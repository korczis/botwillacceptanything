<<<<<<< HEAD
(function() {
=======
(function () {
    'use strict';
>>>>>>> 8e46d2e8cf908ef4bcf38bd6bf31e1b8ca5ac7d9
    var spawn = require('child_process').spawn;

    function startMain(code) {
        if (code !== 0) {
            return console.error('Failed to NPM install');
        }
        var child = spawn('node', [__dirname + "/main.js"], {
            detached: true,
            stdio: 'inherit'
        });
        child.unref();

        process.exit(0);
    }

    function npmInstall() {
        var child = spawn('npm', ['install']);
        child.stderr.on('data', function (data) {
            console.error('npm install stderr: ' + data);
        });
        child.on('close', startMain);
    }

<<<<<<< HEAD
    npmInstall();
}());
=======
>>>>>>> 8e46d2e8cf908ef4bcf38bd6bf31e1b8ca5ac7d9

    npmInstall();
}());
