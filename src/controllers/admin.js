app.controller("AdminController", [
	"$scope", "$http", "$location", "LoginFactory",
	function($scope, $http, $location, LoginFactory){
		

		$scope.user = LoginFactory.getUser();

		$scope.test = "test";
	}
]);