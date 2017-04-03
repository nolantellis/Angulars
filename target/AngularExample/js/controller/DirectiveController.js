/**
 * 
 */

var app=angular.module("MyDirective",[]);

app.directive("myDirective",function(){
	
	return {
		restrict: 'A',
		replace : true,
		template: '<a href="{{myUrl}}">{{myUrlText}}</a>',
		
		scope : {
			myUrl : '@',
			myUrlText : '@'
		}
	}
	
});