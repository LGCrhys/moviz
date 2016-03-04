'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('DetailsCtrl', function ($scope,$http) {
      $scope.pictures = null;
      $http.get('/pictures')
        .success(function(data){
          $scope.listePerso=data;
        })
  });
