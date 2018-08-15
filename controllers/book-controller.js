'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BookController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
		
		$scope.id = $stateParams.id;

		// $http.post('books.php').
		// 	then(function(res){
		// 		$scope.books = res.data;
		// 	}, function(error){
		// 		alert(error);
		// 	})

	}]);
	
}());