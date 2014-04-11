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
        shell: {
            publishDocs: {
                options: {
                    stdout: true
                },
                command: 'rake publish ALLOW_DIRTY=true'
            }
        },
        usebanner: {
            taskName: {
                options: {
                    position: 'top',
                    banner: '#! /usr/bin/env node',
                    linebreak: true
                },
                files: {
                    src: ['dist/main.js']
                }
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

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['coffee', 'usebanner']);
    grunt.registerTask('publish', ['shell']);
    grunt.registerTask('test', ['build', 'coffeelint']);
};
