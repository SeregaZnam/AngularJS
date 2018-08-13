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
	
}());