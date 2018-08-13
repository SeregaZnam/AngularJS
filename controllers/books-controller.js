'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BooksController', ['$scope', '$log', 'MyFactory', function($scope, $log, MyFactory){
		$scope.addBooks = function() {
			if (angular.isDefined($scope.name)) {
				$scope.books.push({
					title: $scope.name,
					year: 'XXXX',
					price: 'XXX'
				});
			} else {
				alert('Error!');
			}
			$scope.name = '';
		};
		$scope.books = MyFactory.books; 
		$scope.test = 'TEST';
	}]);

	app.filter('myFilter', function(){
		return function(str, param1, param2){
			console.log(str);
			console.log(param1);
			console.log(param2);
			return str[0].toUpperCase() + str.slice(1);
		};
	}); 
	
}());