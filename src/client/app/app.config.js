'use strict';

angular
  .module('cta-tracker')
  .config(function($routeProvider) {
    $routeProvider
      .when('/trains', {
        templateUrl: 'train/trains.html',
        controller: 'trains'
      }).when('/buses', {
        templateUrl: 'bus/buses.html',
        controller: 'buses'
      }).when('/', {
        templateUrl: 'home/home.html'
      });
});
