'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('MainCtrl', function ($scope) {
  })
  .directive('aThumbnail', function() {
	  return {
	    restrict: 'E',
	    scope: {
	    	href: '@',
	    	src: '@',
	    	legend: '@'
	    },
	    template: '<a href="{{href}}" class="thumbnail">'
			    +'  <img src="{{src}}" alt="No Preview">'
			    +'  <div class="caption">'
			    +'    <p>{{legend}}</p>'
			    +' </div>'
			    +'</a>'
	  }
	});


  
