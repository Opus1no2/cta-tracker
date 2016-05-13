exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  framework: 'jasmine',

  baseUrl: 'http://localhost:8000/',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
