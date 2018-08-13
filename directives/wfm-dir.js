'use strict';

(function(){

	var app = angular.module('MyApp');

	app.directive('wfmDir', function(){
		return {
			templateUrl: 'templates/directives_tpl/wfm-dir.html',
			// restrict: 'EA', // EACM
			replace: false,
			// controller: 'BooksController',
			link: function(scope, element, attrs) {
				console.log(scope);
				console.log(element);
				console.log(attrs);
			}
		};
	});

}());