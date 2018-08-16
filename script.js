'use strict';

(function(){

	var app = angular.module('MyApp', ['ui.router', 'ngAnimate']);

	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/#');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/books.html',
				controller: 'BooksController',
			})
			.state('book', {
				url: '/book/:id',
				templateUrl: 'templates/book.html',
				controller: 'BookController',
			});
	}]);

}());