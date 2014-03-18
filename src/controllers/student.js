app.controller("StudentController", [
	"$scope", "$http", "$location", "LoginFactory", "EvalFactory",
	function($scope, $http, $location, LoginFactory, EvalFactory){
		$scope.token = LoginFactory.getToken();
		$scope.user = LoginFactory.getUser();

		//STUDENT
		if(LoginFactory.getUser().role === 'student'){
			EvalFactory.getStudentEvaluations()
			.then(function(data){
				console.log(data);
			})
			.catch(function(){
				console.log('Error');
			});
		}

		$scope.test = "test";
	}
]);