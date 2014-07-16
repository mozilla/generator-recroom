'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var PageGenerator = module.exports = function(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);

    this.hookFor('recroom:controller', {
        args: args,
        options: {
            options: {
                singlePage: true
            }
        }
    });
};

// TODO: add option for Array or Object controller
util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype._getJSPath = function(file) {
    return file + '.js';
};
