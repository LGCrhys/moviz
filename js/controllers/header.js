'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('HeaderCtrl', function ($scope) {
      $scope.headerTitle = "Moviz <small> La médiathèque de Nini et Nitof ! </small>"
  });
