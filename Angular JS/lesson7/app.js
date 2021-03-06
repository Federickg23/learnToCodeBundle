angular.module('myFirstApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/about'.{
		templateUrl:'views/about.html'
	})
	.when('/contact', {
		templateUrl:'views/contact.html'
	})
	.otherwise({templateUrl:'views/404.html'})
}])
.factory('personService',  function(){

	 var person = {};

	 person.printName = function(firstName,lastName) {
	 	return firstName + ' ' +lastName;
	 }
	return person;
})
.controller('myController', function($scope, personService) {

    $scope.firstName = 'Trainee';
    $scope.lastName = 'Russo';


    $scope.printName = function () { return personService.printName($scope.firstName,$scope.lastName) };


} );
