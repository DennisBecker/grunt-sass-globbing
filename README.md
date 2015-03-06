# grunt-sass-globbing

[![Build Status](https://travis-ci.org/DennisBecker/grunt-sass-globbing.svg?branch=master)](https://travis-ci.org/DennisBecker/grunt-sass-globbing)

> Create an import map file with @import from a configured path

> This plugin can be used with libsass, Ruby Sass, PostCSS or Less

> Initially it's intend was to offer an alternative for Ruby Gem sass-globbing used with Ruby SASS

## Supported CSS preprocessors

### Ruby Sass

This plugin can be used with Ruby Sass as an alternative for the Ruby Gem `sass-globbing`. It might increase speed on compile time but there is no comparison yet.

### libsass

libsass (and Ruby Sass) do not support globbing out-of-the-box. This plugin helps you migrating existing projects from Ruby Sass to libsass.

### PostCSS

With the release of v1.2.0 the generated @import map file is compatible with PostCSS.

### Less

As for the other CSS preprocessors, Less also supports the same type of @import statements, so you can configure this plugin to use it with Less.


## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-globbing --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-globbing');
```

## The "sass_globbing" task

### Overview

In your project's Gruntfile, add a section named `sass_globbing` to the data object passed into `grunt.initConfig()`.

### Usage Examples

In this example, an import map from a defined path will be created. Best practice is that the empty destination file is added to your version control, while `grunt-sass-globbing` will overwrite it with the generated import statements.

#### Usage with libsass or Ruby Sass

```js
grunt.initConfig({
  sass_globbing: {
    your_target: {
      files: {
        'src/_importMap.scss': 'src/partials/**/*.scss',
        'src/_variblesMap.scss': 'src/variables/**/*.scss',
      },
      options: {
        useSingleQuoates: false
      }
    }
  }
});
```

#### Usage with PostCSS

```js
grunt.initConfig({
  sass_globbing: {
    your_target: {
      files: {
        'src/_importMap.css': 'src/partials/**/*.css',
        'src/_variblesMap.css': 'src/variables/**/*.css',
      },
      options: {
        useSingleQuoates: false
      }
    }
  }
});
```

#### Usage with Less

```js
grunt.initConfig({
  sass_globbing: {
    your_target: {
      files: {
        'src/_importMap.less': 'src/partials/**/*.less',
        'src/_variblesMap.less': 'src/variables/**/*.less',
      },
      options: {
        useSingleQuoates: false
      }
    }
  }
});
```

### Options

#### useSingleQuotes
Type: `Boolean`
Default: `false`

Determines whether single or double quotes are used around import statements.

* `false` - Double quotes are used.
* `true` - Single quotes are used.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

For detailed release information have a look at the [change log](CHANGELOG.md)
