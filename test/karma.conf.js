// Karma configuration
// Generated on Thu May 12 2016 22:15:00 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-mocks/angular-mocks.min.js',
      'src/client/app/app.module.js',
      'test/unit/*.js'
    ],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  });
};
