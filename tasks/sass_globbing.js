/*
 * grunt-sass-globbing
 * https://github.com/DennisBecker/grunt-sass-globbing
 *
 * Copyright (c) 2014 Dennis Becker
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {

  var fs = require('fs');
  var path = require('path')

  grunt.registerMultiTask('sass_globbing', 'Create file with @import from a configured path', function() {

    var importFiles = [];
    var signature = '// generated with grunt-sass-globbing\n\n';

    this.files.forEach(function(f) {

      if (!(f.dest in importFiles)) {
        importFiles[f.dest] = signature;
      }

      f.src.forEach(function(filePath) {

        var importPath = path.relative(path.dirname(f.dest), filePath);
        importPath = importPath.replace('_', '');
        importPath = importPath.replace(path.extname(importPath), '');

        importFiles[f.dest] += '@import "' + importPath + '";\n';
      });
    });

    for(var index in importFiles) {
      grunt.file.write(index, importFiles[index]);
    }
  });

};
