var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){

	$scope.username = "";
	$scope.password = "";

	$scope.login = function(){
		console.log("Logging in: " + $scope.username + ", " + $scope.password);

		var userObj = {username: $scope.username, password: $scope.password};
		$http.post('api/login', userObj);
		
		}

}]);