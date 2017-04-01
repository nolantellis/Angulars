/**
 * 
 */
var myApp = angular.module("MyApp", []);
myApp.controller("ClockController", function($scope) {

	var updateClock = function() {
		$scope.clock = new Date();
	};

	setInterval(function() {
		$scope.$apply(updateClock);
	}, 1000);
	updateClock();

});
