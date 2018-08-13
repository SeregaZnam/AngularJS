'use strict';

(function(){

	var app = angular.module('MyApp');

	app.factory('MyFactory', [function(){
		return {
			books: [
				{title: 'Книга 1', year: 1900, price: 100},
				{title: 'Книга 2', year: 1993, price: 10},
				{title: 'Книга 3', year: 2002, price: 57},
				{title: 'Книга 4', year: 1995, price: 78},
				{title: 'Книга 5', year: 2016, price: 47}
			]
		}
	}]);
	
}());