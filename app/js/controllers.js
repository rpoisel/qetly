'use strict()';

/* Controllers */

// what is the difference between scope and rootScope?
angular.module('qetly.controllers', []).
  controller('MainCtrl', function($scope, $rootScope) {
      $scope.count = 0;
      // why do I have to listen for an event to come instead of a $watch?
      $rootScope.$on(
          "pointsChanged",
          function(event, data) {
              console.log(data);
              $scope.count += 1;
              // what corresponds to {{url}}?
              $scope.url = $scope.count;
          }
      );
  });
