'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BooksController', ['$scope', '$http', function($scope, $http){
		
		$http.post('books.php').
			then(function(res){
				$scope.books = res.data;
			}, function(error){
				alert(error);
			})

	}]);

	app.filter('myFilter', function(){
		return function(str, param1, param2){
			return str[0].toUpperCase() + str.slice(1);
		};
	}); 
	
}());