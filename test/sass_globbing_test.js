'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sass_globbing = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  defult_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/partials.scss');
    var expected = grunt.file.read('test/expected/partials.scss');
    test.equal(actual, expected, 'generated partials.scss is correct');

    test.done();
  },
  single_quotes: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/other-single.scss');
    var expected = grunt.file.read('test/expected/other-single.scss');
    test.equal(actual, expected, 'generated other.scss is correct');

    test.done();
  },
  multi_files: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/partials.scss');
    var expected = grunt.file.read('test/expected/partials.scss');
    test.equal(actual, expected, 'generated partials.scss is correct');

    actual = grunt.file.read('tmp/other.scss');
    expected = grunt.file.read('test/expected/other.scss');
    test.equal(actual, expected, 'generated other.scss is correct');

    test.done();
  }
};
