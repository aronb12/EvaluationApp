var EvaluationControllers = angular.module("EvaluationControllers", []);

EvaluationControllers.controller("LoginController", [
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
	}
]);

EvaluationControllers.controller("HomeController", [
	"$scope", "ApiFactory",
	function($scope, ApiFactory) {
		
		ApiFactory.getAllEvaluations().then(function(data) {
			$scope.evaluations = data;
		}, function(errorMessage) {
		}, function(updateMessage) {
		});


		$scope.test = "test";
	}
]);

EvaluationControllers.controller("EvaluationController", [
	"$scope", "ApiFactory", "$routeParams",
	function($scope, ApiFactory, $routeParams) {
		var evaluationID = $routeParams.evaluationID;

		if(evaluationID !== undefined) {
			ApiFactory.getEvaluationById(evaluationID).then(function(data) {
				$scope.evaluation = data;
			}, function(errorMessage) {
				console.log("Error fetching evaluation: " + errorMessage);
			});
		}
		else {
			$scope.evaluation = {
				TitleIS: "",
				TitleEN: "",
				IntroTextIS: "",
				IntroTextEN: "",
				CourseQuestions: [],
				TeacherQuestions: []
			};
		}

		$scope.addAnswer = function(question) {
			question.Answers.push("New answer");
		};

		$scope.addCourseQuestion = function() {
			$scope.evaluation.CourseQuestions.push({
				ID: $scope.evaluation.CourseQuestions.length,
				TextIS: "",
				TextEN: "",
				ImageURL: "",
				Type: "single",
				Answers: []
			});
		};
	}
]);