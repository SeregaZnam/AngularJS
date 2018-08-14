'use strict';

(function(){

	var app = angular.module('MyApp');

	app.controller('BooksController', ['$scope', '$log', 'MyFactory', '$http', function($scope, $log, MyFactory, $http){
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

		// $http({method: 'GET', url: 'data.html'}).
		// 	then(function(res, status){
		// 		console.log(res.data);
		// 		console.log(res.status);
		// 	},function(res,status){
		// 		alert('Error!');
		// 	});

		// $http.get('data.html').
		// 	then(function(res, status){
		// 		console.log(res.data);
		// 		console.log(res.status);
		// 	},function(res, status){
		// 		alert('Error!');
		// 	});
			
		var data = {
			var1: 'Переменная 1',
			var2: 'Переменная 2'
		};

		$http.post('data.php', data).
			then(function(res){
				// console.log(res.data);
				// console.log(res.status);
				$scope.data = res.data;
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