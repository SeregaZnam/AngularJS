'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BookController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		
		$scope.id = $routeParams.id;

		// $http.post('books.php').
		// 	then(function(res){
		// 		$scope.books = res.data;
		// 	}, function(error){
		// 		alert(error);
		// 	})

	}]);
	
}());