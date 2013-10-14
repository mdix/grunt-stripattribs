# grunt-stripattribs

> Strips attributes from html-tags. Also supports regexps.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stripattribs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stripattribs');
```

## The "stripattribs" task

### Overview
In your project's Gruntfile, add a section named `stripattribs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
})
```

### Options

#### options.verbose
Type: `Boolean`
Default value: false

Whether to show which files have been written or not.

#### options.attribNames
Type: `Array`
Default value: None, it's mandatory

An array that holds the attributes that shall be stripped.