'use strict';

module.exports =
  angular.module('SimplySocial.home', [])
    .config(function ($stateProvider) {
      $stateProvider
        .state('home', {
          url: '',
          controller: 'homeController',
          templateUrl: 'app/home/layout.html'
        });
    })
    .factory('homeService', require('./homeService'))
    .directive('response', require('./homeDirective'))
    .controller('homeController', require('./homeController'));
