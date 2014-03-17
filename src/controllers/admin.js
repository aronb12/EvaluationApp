app.controller("AdminController", [
	"$scope", "$http", "$location", "LoginFactory", "EvalFactory",
	function($scope, $http, $location, LoginFactory, EvalFactory){
		$scope.token = LoginFactory.getToken();
		$scope.user = LoginFactory.getUser();

		//var response = EvalFactory.createEvaluation();
		EvalFactory.getEvaluations().then(function(data){
			console.log(data);
		}).catch(function(errorMessage){
			console.log('Error: ' + errorMessage);
		});
		//var response = EvalFactory.getEvaluation(2);
		//console.log(response);

		$scope.test = "test";
	}
]);