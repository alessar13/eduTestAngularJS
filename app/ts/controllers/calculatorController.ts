import * as angular from 'angular';


angular.module('app', []).controller('calculatorController', ['$scope', ($scope) => {
	$scope.greeting = 'Hola!';
}]);