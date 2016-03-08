'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:SideBarCtrl
 * @description
 * # SideBarCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')

  .controller('SideBarCtrl', function ($scope) {
	  $scope.menus = ['home','movies','musics','pictures','settings'];
	})

  .directive('iconButton', function() {
	  return {
	    restrict: 'E',
	    scope: {
	    	menu: '@'
	    },
	    template: '<button class="btn btn-icon">'
			    +'<img src="styles/resources/img/{{menu}}_icon.svg" width="50" height="50">'
			    +'</button>'
	  };
	});
