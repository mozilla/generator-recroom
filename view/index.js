'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ViewGenerator = module.exports = function(args, options, config) {
    yeoman.generators.NamedBase.apply(this, arguments);
    this.pluralized_name = fleck.pluralize(this.name);
    this.slugified_name = this._.slugify(this.name);

    this.singlePage = options.singlePage;
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype._getJSPath = function(file) {
    return file + '.js';
};

ViewGenerator.prototype.files = function() {
    // These views are always created, even for single page (i.e. recroom:page)
    // generated files.
    this.copy(this._getJSPath('single'),
              'app/scripts/views/' + this.slugified_name +
              this._getJSPath('_view'));
    this.copy('single.hbs',
              'app/templates/' + this.slugified_name + '.hbs');

    if (!this.singlePage) {
        this.copy(this._getJSPath('single_edit'),
                  'app/scripts/views/' + this.slugified_name +
                  this._getJSPath('_edit_view'));
        this.copy(this._getJSPath('plural'),
                  'app/scripts/views/' + this._.slugify(this.pluralized_name) +
                  this._getJSPath('_view'));
        this.copy('single_edit.hbs',
                  'app/templates/' + this.slugified_name + '/edit.hbs');
        this.copy('plural.hbs',
                  'app/templates/' + this._.slugify(this.pluralized_name) +
                  '.hbs');
    }
};
