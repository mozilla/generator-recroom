'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');
var fleck = require('fleck');

var ControllerGenerator = module.exports = function(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
    this.pluralized_name = fleck.pluralize(this.name);

    this.singlePage = options.singlePage;

    this.hookFor('recroom:view', {
        args: args,
        options: {
            options: options
        }
    });

    // this.hookFor('recroom:router', {
    //     options: {
    //         options: options
    //     }
    // });
};

// TODO: add option for Array or Object controller
util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype._getJSPath = function(file) {
    return file + '.js';
};

ControllerGenerator.prototype.files = function() {
    // FIXME: Test for page vs model for issue #5
    // (https://github.com/mozilla/generator-recroom/issues/5)?
    this.template(this._getJSPath('base'), 'app/scripts/controllers/' +
                  this._.slugify(this.name) +
                  this._getJSPath('_controller'));
    this.template(this._getJSPath('single_route'),
                  'app/scripts/routes/' + this._.slugify(this.name) +
                  this._getJSPath('_route'));

    if (!this.singlePage) {
        this.template(this._getJSPath('plural'), 'app/scripts/controllers/' +
                      this._.slugify(this.pluralized_name) +
                      this._getJSPath('_controller'));
        this.template(this._getJSPath('base_edit'), 'app/scripts/controllers/' +
                      this._.slugify(this.name) +
                      this._getJSPath('_edit_controller'));
        this.template(this._getJSPath('plural_route'), 'app/scripts/routes/' +
                      this._.slugify(this.pluralized_name) +
                      this._getJSPath('_route'));
        this.template(this._getJSPath('single_edit_route'),
                      'app/scripts/routes/' + this._.slugify(this.name) +
                      this._getJSPath('_edit_route'));
    }
};
