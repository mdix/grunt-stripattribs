/*
 * grunt-stripattribs-plugin
 * https://github.com/mdix/grunt-stripattribs-plugin
 *
 * Copyright (c) 2013 Marc Dix
 * Licensed under the MIT license.
 */
'use strict';

var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('stripattribs_plugin', 'Strips attributes from html-tags. Also supports regexps.', function () {
        var attribNames = this.options().attribNames;
        var VERBOSE     = this.options().verbose;

        this.files.forEach(function (f) {
            f.src.filter(function(filepath) {
                if (grunt.file.isFile(filepath)) {
                    var initialFileContent  = grunt.file.read(filepath);
                    var fileContent         = initialFileContent;

                    // STRIP ATTRIBS
                    for (var i = 0; i < attribNames.length; i++) {
                        var regExp       = new RegExp(attribNames[i] + '([=]{1}["]{1}[^"]*["]|)', 'g');
                            fileContent  = fileContent.replace(regExp, '');
                            fileContent  = fileContent.replace(/[\s]{2}/g, ' ');
                            fileContent  = fileContent.replace(/[\s]{1}>/g, '>');
                    }

                    // WRITE
                    if (grunt.file.write(filepath, fileContent) === true) {
                        if (VERBOSE) {
                            grunt.log.writeln('File "' + filepath + '" created.');
                        }
                    }
                }
            });
        });
    });
};