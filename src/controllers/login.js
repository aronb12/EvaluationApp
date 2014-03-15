app.controller("LoginController", [
	"$scope", "LoginFactory",
	function($scope, LoginFactory){
		$scope.user = {};

		$scope.login = function(){
			console.log($scope.user.username);

			LoginFactory.login($scope.user.username, $scope.user.password).then(function(data){
				$scope.info = data;
			});
			console.log(data);
		};
	}
]);