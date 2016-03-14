'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('MainCtrl', function (RecentMovies,RecentMusics,RecentPictures,$scope) {
  	$scope.recentMovies = RecentMovies.query();
  	$scope.recentMusics = RecentMusics.query();
  	$scope.recentPictures = RecentPictures.query();
  })
  .directive('captionThumbnail', function() {
	  return {
	    restrict: 'E',
	    scope: {
	    	href: '@',
	    	src: '@',
	    	legend: '@',
	    	mediatype:'@'
	    },
	    /*template: '<a href="{{href}}" class="thumbnail">'
				+'	<img ng-src="http://localhost:8081/{{src}}" alt="No Cover" />'
			    +'  <div class="caption">'
			    +'    <p>{{legend}}</p>'
			    +' </div>'
			    +'</a>'*/
      template: '<ul class="caption-style" >'
                  +'<li> <img ng-src="http://localhost:8081/{{src}}" alt="No Cover">'
                  +'<div class="caption">'
                  +'<div class="blur"></div>'
                  +'<div class="caption-text">'
                  +'<h1>{{legend}}</h1>'
                  +'</div>'
                  +'</div>'
                  +'</li>'
                  +'</ul>'
	  }
	})
  .service('RecentMovies', ['$resource',function($resource){
    var RecentMovies = $resource(
           'http://localhost:8080/movies',
           {},
           {
               update:{method:'GET'}
           }
       );
       return RecentMovies;
	}])
  .service('RecentMusics', ['$resource',function($resource){
    var RecentMusics = $resource(
           'http://localhost:8080/musics',
           {},
           {
               update:{method:'GET'}
           }
       );
       return RecentMusics;
	}])
  .service('RecentPictures', ['$resource',function($resource){
    var RecentPictures = $resource(
           'http://localhost:8080/pictures',
           {},
           {
               update:{method:'GET'}
           }
       );
       return RecentPictures;
	}]);


  
