app.controller("LoginController", [
	"$scope", "LoginFactory",
	function($scope, LoginFactory){
		$scope.user = {};

		//console.log(LoginFactory.getUsername());
		$scope.login = function(){
			//console.log($scope.user.username);

			console.log("hello kitty");
			LoginFactory.login($scope.user.username, $scope.user.password).then(function(data){
				console.log("Meow");
				$scope.info = data;
				console.log(data);
			});
		};

		$scope.test = "test";
	}
]);