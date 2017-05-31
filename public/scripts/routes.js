/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
/*global define */
define([
    'angular',
    './bower_components/angular-ui-router/release/angular-ui-router.min',
    './controllers/main',
    './bower_components/jquery/dist/jquery.min'
], function (angular,angularui, controllers, $) {
	'use strict';

	return angular.module('app.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
		//Turn on or off HTML5 mode which uses the # hash
		$locationProvider.html5Mode(false);
		/**
		 * Router paths
		 * This is where the name of the route is matched to the controller and view template.
		 */
		$stateProvider
            .state('/unauthorized', {url: '/unauthorized', templateUrl: '/views/unauthorized.html', controller: 'MainCtrl'});

		$urlRouterProvider
			.otherwise('/');
	}]);
});
