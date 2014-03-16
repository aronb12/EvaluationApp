app.controller("LoginController", [
	"$scope", "$http", "$location", "LoginFactory",
	function($scope, $http, $location, LoginFactory){
		//$scope.user = {};
		var token;
		var user = {};

		$scope.login = function(){

			$http.defaults.headers.common.Authorization = "Basic " + LoginFactory.getToken();
			LoginFactory.login($scope.user.username, $scope.user.password).then(function(data){
				//token = data[0];
				//user = data[1]; 
				//console.log("Token is: " + data[0]);
				token = data[0];
				user = data[1];
				if(data[1].role === 'admin'){
					$location.path('/admin');
				}
				else if(data[1].role === 'student'){
					$location.path('/home');
				}
				else{
					$location.path('/');
				}
				//console.log("Username is: " + user.username);
			});
			//console.log(token);
			//console.log(user);
		};

		$scope.test = "test";
	}
]);