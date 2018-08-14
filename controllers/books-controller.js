'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BooksController', ['$scope', '$http', function($scope, $http){
		
		// $scope.books = MyFactory.books; 
			
		$http.post('books.php').
			then(function(res){
				$scope.books = res.data;
			}, function(error){
				alert(error);
			})

	}]);

	app.filter('myFilter', function(){
		return function(str, param1, param2){
			// console.log(str);
			// console.log(param1);
			// console.log(param2);
			return str[0].toUpperCase() + str.slice(1);
		};
	}); 
	
}());