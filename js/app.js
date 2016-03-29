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
  })
  .config(function($httpProvider) {

      $httpProvider.interceptors.push(function($q, $rootScope) {
          return {
              'request': function(config) {
                  $rootScope.$broadcast('loading-started');
                  return config || $q.when(config);
              },
              'response': function(response) {
                  $rootScope.$broadcast('loading-complete');
                  return response || $q.when(response);
              }
          };
      });

  })
  .directive("loadingIndicator", function() {
      return {
          restrict : "A",
          link : function(scope, element, attrs) {
              scope.$on("loading-started", function(e) {
                  element.css({"display" : ""});
              });

              scope.$on("loading-complete", function(e) {
                  element.css({"display" : "none"});
              });

          }
      };
  });
