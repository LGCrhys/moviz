'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('MainCtrl', function (RecentMedia,$scope) {
  	$scope.recentMovies = RecentMedia.query();
  })
  .directive('aThumbnail', function() {
	  return {
	    restrict: 'E',
	    scope: {
	    	href: '@',
	    	src: '@',
	    	legend: '@',
	    	mediatype:'@'
	    },
	    template: '<a href="{{href}}" class="thumbnail">'
				+'	<img ng-src="http://localhost:8081/{{src}}" alt="No Cover" />'
			    +'  <div class="caption">'
			    +'    <p>{{legend}}</p>'
			    +' </div>'
			    +'</a>'
	  }
	})
  .service('RecentMedia', ['$resource',function($resource){
    var RecentMedia = $resource(
           'http://localhost:8080/medias',
           {},
           {
               update:{method:'GET'}
           }
       );
       return RecentMedia;
	}]);


  
