/*
angular extends html with ng-directives
binds data to html with expressions-{{}}
^^^ can contain literals, operators and variables
modules define applications
controllers control applications
ng-app defines the root element, an angular app
^^^ auto-bootstrap(initialize) the app when a web page is loaded
ng-init directive defines initial values for app
^^^ normally you'll use a controller or module not ng-init
ng-model binds html control values(input,select,textarea)
^^^ also provide type validation, app data status, css classes, html elements to forms
creating and invoking directives
restrictions:
E for Element name
A for Attribute
C for Class
M for Comment
EA default



AngularJS extends HTML with ng-directives.

The ng-app directive defines an AngularJS application.

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

The ng-bind directive binds application data to the HTML view. 
*/

var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.fname = "John";
	$scope.lname = "Towle";
})
var apps = angular.module("myApps",[]);
app.directive("w3TestDirective",function(){
	return{
		/*restrict : "C",*/
		restrict : "M",// works on comment
		replace : true,// works on comment
		template : "<h1>Made by a directive!</h1>"
	}
});