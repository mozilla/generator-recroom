'use strict';
var chalk = require('chalk');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var RecroomGenerator = module.exports = function RecroomGenerator(args, options) {
    yeoman.generators.Base.apply(this, arguments);

    if (this.appname.match(/^[Ee]mber$/)) {
        this.appname += '_app';
    }

    // setup the test-framework property, Gruntfile template will need this
    this.testFramework = options['test-framework'] || 'mocha';

    // for hooks to resolve on mocha by default
    if (!options['test-framework']) {
        options['test-framework'] = 'mocha';
    }

    // hook for CoffeeScript
    this.options.coffee = options.coffee;

    // hook for karma test runner
    this.options.karma = options.karma;

    // resolved to mocha by default (could be switched to jasmine for instance)
    this.hookFor('test-framework', { as: 'app' });

    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

    // this holds the list of scripts we want to include in components.js
    this.bowerScripts = [
        'bower_components/jquery/jquery.js',
        'bower_components/handlebars/handlebars.runtime.js',
        '@@ember',
        '@@ember_data',
        'bower_components/brick/dist/brick.js',
        'bower_components/localforage/localforage.js'
    ];
};

util.inherits(RecroomGenerator, yeoman.generators.Base);

RecroomGenerator.prototype._getJSPath = function _getJSPath(file) {
    return file + (this.options.coffee ? '.coffee' : '.js');
};

RecroomGenerator.prototype.welcome = function welcome() {
    // Thanks to @fwenzel for this one.
    console.log(
        chalk.yellow("\nWelcome to recroom. Get ready to make an awesome web app.")
    );
};

RecroomGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [];

    // Ask if the user is interested in using CoffeeScript.
    prompts.push({
        type: 'confirm',
        name: 'coffeescript',
        message: 'Would you like to use CoffeeScript?',
        default: false
    });

    this.prompt(prompts, function(props) {
        this.options.coffee = props.coffeescript;

        cb();
    }.bind(this));
};

RecroomGenerator.prototype.createDirLayout = function createDirLayout() {
    this.mkdir('app/templates');
    this.mkdir('app/styles');
    this.mkdir('app/images');
    this.mkdir('app/scripts');
    this.mkdir('app/scripts/models');
    this.mkdir('app/scripts/controllers');
    this.mkdir('app/scripts/routes');
    this.mkdir('app/scripts/views');
};

RecroomGenerator.prototype.git = function git() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
};

RecroomGenerator.prototype.bower = function bower() {
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
};

RecroomGenerator.prototype.packageFile = function packageFile() {
    this.copy('_package.json', 'package.json');
};

RecroomGenerator.prototype.jshint = function jshint() {
    this.copy('_jshintrc', '.jshintrc');
};

RecroomGenerator.prototype.manifestWebapp = function manifestWebapp() {
    this.copy('_manifest.webapp', 'manifest.webapp');
};

RecroomGenerator.prototype.tests = function tests() {
    if (this.options.karma) {
        this.mkdir('test');
        this.mkdir('test/support');
        this.mkdir('test/integration');
        this.copy('karma.conf.js', 'karma.conf.js');

        this.template(this._getJSPath('test/_initializer'), this._getJSPath('test/support/initializer'));
        this.template(this._getJSPath('test/integration/_index'), this._getJSPath('test/integration/index'));
    }
};

RecroomGenerator.prototype.editorConfig = function editorConfig() {
    this.copy('editorconfig', '.editorconfig');
};

RecroomGenerator.prototype.gruntfile = function gruntfile() {
    this.template('Gruntfile.js');
};

RecroomGenerator.prototype.templates = function templates() {
    this.copy('hbs/application.hbs', 'app/templates/application.hbs');
    this.copy('hbs/index.hbs', 'app/templates/index.hbs');
};

RecroomGenerator.prototype.writeIndex = function writeIndex() {
    var mainCssFiles = [
        'styles/normalize.css',
        'styles/style.css',
        'bower_components/brick/dist/brick.css'
    ];

    this.indexFile = this.appendStyles(this.indexFile, 'styles/main.css', mainCssFiles);

    this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/components.js', this.bowerScripts, null, 'app');

    this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/templates.js', ['scripts/compiled-templates.js'], null, '.tmp');
    this.indexFile = this.appendFiles(this.indexFile, 'js', 'scripts/main.js', ['scripts/combined-scripts.js'], null, '.tmp');

    this.indexFile = this.indexFile.replace('<title></title>', '<title>' + this.appname + '</title>');
};

RecroomGenerator.prototype.all = function all() {
    this.write('app/index.html', this.indexFile);

    this.copy('styles/normalize.css', 'app/styles/normalize.css');
    this.copy('styles/style.css', 'app/styles/style.css');

    this.copy(this._getJSPath('scripts/app'), this._getJSPath('app/scripts/app'));
    this.copy(this._getJSPath('scripts/store'), this._getJSPath('app/scripts/store'));
    this.copy(this._getJSPath('scripts/router'), this._getJSPath('app/scripts/router'));
    this.copy(this._getJSPath('scripts/routes/application_route'), this._getJSPath('app/scripts/routes/application_route'));
};

RecroomGenerator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }

    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};
