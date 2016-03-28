'use strict';

/**
 * @ngdoc function
 * @name movizApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the movizApp
 */
angular.module('movizApp')
  .controller('SettingsCtrl',['mediaFactory','$scope', function(mediaFactory,$scope) {
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
	    	],
	    	selectedOption: {id: '1', name: 'Western' , media:'movie'}};

	    $scope.data = {
	    	mediaType : 'movie',
	    	title : '',
	    	file : null,
	    	cover_file : null,
	    	categorie : ""
	    }

	    $scope.submit = function(){
	    	$scope.data.categorie = $scope.categories.selectedOption.name;
	    	switch($scope.data.mediaType){
	    		case 'movie':
	    			mediaFactory.addMovie($scope.data);
	    			break;
	    		case 'music':
	    			mediaFactory.addMusic($scope.data);
	    			break;
	    		case 'picture':
	    			mediaFactory.addPicture($scope.data);
	    			break;
	    		default:
	    			break;
	    	}
	    }
	}])
    .directive('uploadFile', function() {
	  return {
	    restrict: 'E',
	    scope: {
	    	fileread: '=',
	    	emptyText: '@'
	    },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.$apply(function () {
                    scope.fileread = changeEvent.target.files[0];
                });
            });
        },
        template: '<div class="input-group">'
        			+'<span class="input-group-btn">'
				  	  +'<span class="btn btn-primary" onclick="$(this).parent().find(\'input[type=file]\').click();">Browse</span>'
				    	+'<input name="uploaded_file" onchange="$(this).parent().parent().find(\'.form-control\').html($(this).val().split(/[\\|/]/).pop());" style="display: none;" type="file">'
				 	  +' </span>'
				 	+'<span class="form-control">{{emptyText}}</span>'
				 	+'</div>'
	  }
	})
   .service('mediaFactory', ['$http',function($http){
    	this.addMovie = function(params) {
	        $http.post('http://localhost:8080/movies', params).success(function(data, status) {
	           	console.log(data);
	           	console.log(status);
	        })
	   	};
    	this.addMusic = function(params) {
	        $http.post('http://localhost:8080/musics', params).success(function(data, status) {
	           	console.log(data);
	           	console.log(status);
	        })
	   	};
    	this.addPicture = function(params) {
	        $http.post('http://localhost:8080/pictures', params).success(function(data, status) {
	           	console.log(data);
	           	console.log(status);
	        })
	   	};
	}]);
