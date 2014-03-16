var app = angular.module("EvaluationApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/login.html",
		controller: "LoginController"
	}).when("/home", {
		templateUrl: "templates/home.html",
		controller: "HomeController"
	}).when("/evaluation/:evaluationID", {
		templateUrl: "templates/evaluation.html",
		controller: "EvaluationController"
	}).when("/evaluation/", {
		templateUrl: "templates/evaluation.html",
		controller: "EvaluationController"
	}).otherwise({ redirectTo: "/"});
});
app.factory("ApiFactory", [
	"$q",
	function($q) {
		var evaluations = generateEvaluations();

		return {
			getAllEvaluations: function() {
				var deferred = $q.defer();

				deferred.resolve(evaluations);
			
				return deferred.promise;
			},
			getEvaluationById: function(id) {
				var deferred = $q.defer();

				if(evaluations[id]) {
					deferred.resolve(evaluations[id]);
				}
				else {
					deferred.reject("No evaluation with this id");
				}

				return deferred.promise;
			},
			addEvaluation: function(evaluation) {
				var deferred = $q.defer();

				

				return deferred.promise;
			}
		};
	}
]);

function createEvaluation(id, titleIS, titleEN, introIS, introEN) {
	return {
		ID: id,
		TitleIS: titleIS,
		TitleEN: titleEN,
		IntroTextIS: introIS,
		IntroTextEN: introEN,
		CourseQuestions: [],
		TeacherQuestions: []
	};
}

function createQuestion(id, textIS, textEN, imageUrl, type) {
	return {
		ID: id,
		TextIS: textIS,
		TextEN: textEN,
		ImageURL: imageUrl,
		Type: type,
		Answers: []
	};
}

function generateEvaluations() {
	var result = [];
	for(var i = 0; i < 5; ++i) {
		var number = i+1;
		var evaluation = createEvaluation(i, "Kennslumat " + number, "Evaluation " + number, "Derp", "Derp");
		for(var j = 0; j < 3; ++j) {
			var qNumber = j+1;
			var question = createQuestion(j, "Hvað er derp" + qNumber + "?", "What is derp " + qNumber + "?", "", "single");
			evaluation.CourseQuestions.push(question);
		}
		result.push(evaluation);
	}
	return result;
}

app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {
		var username = "";
		var role = "";
		var token = "";
		var status = "";
		return {
			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://dispatch.ru.is/h22/api/v1/login", { user: name, pass: password })
				.success(function(data, status, headers) {
					console.log(data);
					username = name;
					token = data.Token;
					role = data.User.Role;
					deferred.resolve({ username: name, role: data.User.Role, token: data.Token });
				}).error(function() {
					deferred.reject(status);
				});

				return deferred.promise;
			},
			getToken: function() {
				return token;
			},
			getUsername: function() {
				return username;
			},
			getRole: function() {
				return role;
			}
		};
	}
]);
/*var EvaluationControllers = angular.module("EvaluationControllers", []);

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

		$scope.test = "test";
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
]);*/
app.controller("EvaluationController", [
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
app.controller("HomeController", [
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
app.controller("LoginController", [
	"$scope", "LoginFactory",
	function($scope, LoginFactory){
		$scope.user = {};

		$scope.login = function(){

			LoginFactory.login($scope.user.username, $scope.user.password).then(function(data){
				$scope.info = data;
				console.log(data);
			});

		};

		$scope.test = "test";
	}
]);