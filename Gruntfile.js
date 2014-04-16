/*global exports:true, require:true */
module.exports = exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        casper: {
        },
        coffee: {
          compile: {
              expand: true,
              flatten: true,
              cwd: 'src',
              src: ['*.coffee'],
              dest: 'dist/',
              ext: '.js',
              options: {
                  bare: true,
              }
          }
        },
        coffeelint: {
            options: {},
            source: ['src/*.coffee']
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

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['coffee']);
    grunt.registerTask('test', ['build', 'coffeelint']);
};
