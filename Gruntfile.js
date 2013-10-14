/*
 * grunt-stripattribs
 * https://github.com/mdix/grunt-stripattribs
 *
 * Copyright (c) 2013 Marc Dix
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>',
            ],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        clean: {
            tests: ['test/dist/*']
        },
        stripattribs: {
            prod: {
                options: {
                    attribNames: ['data-i18n', 'selected'],
                    verbose: true
                },
                files: {
                    src: ['test/src/**']
                }
            },
            dev: {

            }
        },
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'stripattribs']);
};
