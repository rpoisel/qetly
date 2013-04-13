'use strict';


// Declare app level module which depends on filters, and services

angular.module('qetly', ['qetly.controllers', 'qetly.directives', 'qetly.services', 'qetly.filters']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'MainCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
