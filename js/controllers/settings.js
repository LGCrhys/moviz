'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('SettingsCtrl',['$scope', function($scope) {
   $scope.categories = {
    availableOptions: [
      {id: '1', name: 'Western'},
      {id: '2', name: 'Biopics'},
      {id: '3', name: 'Action'}
    ],
    selectedOption: {id: '3', name: 'Action'} //This sets the default value of the select in the ui
    };
}]);
