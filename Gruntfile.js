/*global exports:true, require:true */
module.exports = exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        casper: {
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'nyan'
                },
                src: ['test/test.*.js']
            }
        },
        watch: {
            build: {
                files: ['src/*.coffee'],
                tasks: ['build']
            },
            grunt: {
                files: [
                    'Gruntfile.js'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['mochaTest']);
};
