'use strict';

/**
 * @ngdoc overview
 * @name movizApp
 * @description
 * # movizApp
 *
 * Main module of the application.
 */
angular
  .module('movizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'ngRoute'
  ])
  .constant('FBURL','https://movizz.firebaseio.com')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'partials/login.html'
      })
      .when('/details', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
