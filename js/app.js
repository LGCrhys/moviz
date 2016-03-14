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
    'ngRoute'
  ])
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
      .when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
