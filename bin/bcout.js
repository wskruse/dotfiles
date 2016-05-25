#!/usr/bin/env node
var exec = require('child_process').exec

var child;

child = exec('brew cask info `brew cask list` | grep -B 3 \'Not installed\'', function result(error, stdout, stderr) {
    if(error) {
        console.log('exec error: ' + error);
    } else {
        casks = [];
        stdout.split('--').forEach(function(value) {
            var lines = value.split('\n');
            while(lines[0].length === 0) {
                lines.shift();
            }
            casks.push(lines[0].split(':')[0]);
        });
        console.log(casks.join(' '));
        exec('brew cask install ' + casks.join(' '), function result(error, stdout, stderr) {
            console.log(stdout);
        });
    }
});
