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

	   	$scope.mediaType = 'movie';
	   	$scope.title = '';
	   	$scope.file = null;
	   	$scope.cover_file = null;
	   	$scope.categorie = '';

	    $scope.submit = function(){
	    	var data = new FormData();
	    	data.append('mediaType',$scope.mediaType);
	    	data.append('title',$scope.title);
	    	data.append('categorie',$scope.categories.selectedOption.name);
	    	data.append('files',$scope.file);
	    	data.append('files',$scope.cover_file);
	    	mediaFactory.addMedia(data);
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
    	this.addMedia = function(params) {
	        $http.post('http://localhost:8080/medias',
	        	params,
	        	{
					headers: {'Content-Type': undefined},
					transformRequest: angular.identity
				});
	   	};
	}]);
