// Karma configuration
// Generated on Wed Jan 18 2017 10:59:16 GMT-0300 (SA Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // files: [
    //   '"*.js"',
    //   '*.js',
    //   'spec/*.js',
    //   'spec/*.js'
    // ],

    files: [
      'js/libs/angular.js',
      'js/libs/angular-mocks.js',
      'js/libs/angular-route.js',
      'js/application.js',
      // '*.js', // Nuevo.
      'src/*.js', // Nuevo.
      'src/app/*.js', // Nuevo.
      'src/app/services/*.js', // Nuevo. Cambié * por services. Con * tira error.
      'spec/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.config.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // Originalmente era 'progress'. Para spec --> npm install karma-spec-reporter --save-dev
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
