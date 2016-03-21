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
	  	//TODO : Gestion categories via DB
	   	$scope.categories = {
		    availableOptions: [
	      		{id: '1', name: 'Western' , media:'movie'},
	      		{id: '2', name: 'Biopics' , media:'movie'},
	      		{id: '3', name: 'Action' , media:'movie'},
	      		{id: '4', name: 'R&B' , media:'music'},
	      		{id: '5', name: 'Jazz' , media:'music'},
	      		{id: '6', name: 'Funk' , media:'music'},
	      		{id: '7', name: 'Trip' , media:'picture'},
	      		{id: '8', name: 'Party' , media:'picture'},
	      		{id: '9', name: 'Urban' , media:'picture'}
	    	]};

	    $scope.data = {
	    	mediaType : 'movie',
	    	title : '',
	    	path : '',
	    	cover_path : '',
	    	categorie : ''
	    }

	    $scope.submit = function(){
	    	console.log($scope.data);
	    }
	}]);
