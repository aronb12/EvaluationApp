app.controller("AdminController", [
	"$scope", "$http", "$location", "LoginFactory",
	function($scope, $http, $location, LoginFactory){
		

		$scope.user = LoginFactory.getUser();
		console.log(user);

	}
]);