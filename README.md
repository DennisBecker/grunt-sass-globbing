# grunt-sass-globbing

> Create an import map file with @import from a configured path

> This plugin is an alternative for Ruby Gem sass-globbing used with Ruby SASS

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

### Usage Example

In this example, an import map from a defined path will be created. Best practice is that the empty destination file is added to your version control, while `grunt-sass-globbing` will overwrite it with the generated import statements.

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

*	2014-01-27   v1.0.3   use replace() with global modifier to replace all backslashes with slashes
*	2014-01-26   v1.0.2   @import statements change from directory separator from operating system to slashes needed by Sass/libsass
*	2014-12-01   v1.0.1   Example in documentation shows clear usage example, adds keyworks for npm search
*	2014-11-21   v1.0.0   First release of grunt-sass-globbing
