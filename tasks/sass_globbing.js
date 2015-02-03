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
  var path = require('path');

  grunt.registerMultiTask('sass_globbing', 'Create file with @import from a configured path', function() {

    var importFiles = [];
    var signature = '// generated with grunt-sass-globbing\n\n';

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      useSingleQuotes: false
    });

    var quoteSymbol = '"';
    if (typeof options.useSingleQuotes !== 'undefined' && options.useSingleQuotes === true) {
      quoteSymbol = '\'';
    }

    this.files.forEach(function(f) {

      if (!(f.dest in importFiles)) {
        importFiles[f.dest] = signature;
      }

      f.src.forEach(function(filePath) {

        var importPath = path.dirname(path.relative(path.dirname(f.dest), filePath));
        var fileName = path.basename(filePath);
        fileName = fileName.replace(/^_/, '');
        importPath += path.sep + fileName.replace(path.extname(fileName), '');


        importFiles[f.dest] += '@import ' + quoteSymbol + importPath.replace(/\\/g, '/') + quoteSymbol + ';\n';
      });
    });

    for(var index in importFiles) {
      grunt.file.write(index, importFiles[index]);
      grunt.verbose.ok(importFiles[index]);
    }
  });

};
