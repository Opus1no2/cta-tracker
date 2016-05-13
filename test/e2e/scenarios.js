'use strict';

describe('cta-tracer', function () {
  it ('should have a title', function () {
    browser.get('/index.html');
    expect(browser.getTitle()).toEqual('CTA Tracker');
  });

  it ('should have routes', function () {
    browser.get('/index.html');

    element(by.css('.trains a')).click();
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/trains');
    }); 
  });
});
