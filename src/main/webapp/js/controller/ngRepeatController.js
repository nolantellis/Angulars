/**
 * 
 */

var app = angular.module("ngRepeatModule",[]);

app.controller("ngRepeatController", function($scope) {
	
	$scope.persons =[{name : "Name1",age : "20"},{name : "Name2",age : "21"}];
	
});