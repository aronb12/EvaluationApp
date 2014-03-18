app.controller("LoginController", [
	"$scope", "$http", "$location", "LoginFactory",
	function($scope, $http, $location, LoginFactory){
		//$scope.user = {};
		//$scope.token = "";
		$scope.user = {};

		$scope.login = function(){

			//$http.defaults.headers.common.Authorization = "Basic " + LoginFactory.getToken();
			LoginFactory.login($scope.user.username, $scope.user.password).then(function(data){
				//$scope.token = data[0];
				//$scope.user = data[1];
				if(data[1].role === 'admin'){
					$location.path('/admin');
				}
				else if(data[1].role === 'student'){
					$location.path('/student');
				}
				else{
					$location.path('/');
				}
			});
		};

		$scope.test = "test";
	}
]);