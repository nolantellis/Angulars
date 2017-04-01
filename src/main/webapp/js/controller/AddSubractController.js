/**
 * 
 */

var myApp = angular.module("MyApp", []);
myApp.controller("AddSubractController", function($scope) {
	
	$scope.addNumber=0;
	$scope.subNumber=10;

	$scope.add=function(){
		$scope.addNumber=$scope.addNumber+1;
	};
	
	$scope.sub=function(){
		$scope.subNumber=$scope.subNumber-1;
	};
	
	
});
