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
        template: '<span class="input-group-btn">'
				    +'<span class="btn btn-primary" onclick="$(this).parent().find(\'input[type=file]\').click();">Browse</span>'
				    +'<input name="uploaded_file" onchange="$(this).parent().parent().find(\'.form-control\').html($(this).val().split(/[\\|/]/).pop());" style="display: none;" type="file">'
				 +' </span>'
				 +'<span class="form-control">{{emptyText}}</span>'
	  }
	});
