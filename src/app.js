var app = angular.module("EvaluationApp", ["ngRoute"]);

app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "templates/login.html",
			controller: "LoginController"
		}).when("/admin", {
			templateUrl: "templates/admin.html",
			controller: "AdminController",
			resolve: {
				this: function($location, LoginFactory){
					if(LoginFactory.getRole() !== 'admin'){
						$location.path('/');
					}
				}
			}
		}).when("/admin/create_evaluation", {
			templateUrl: "templates/create_evaluation.html",
			controller: "AdminController",
			resolve: {
				this: function($location, LoginFactory){
					if(LoginFactory.getRole() !== 'admin'){
						$location.path('/');
					}
				}
			}
		}).when("/admin/active_evaluation", {
			templateUrl: "templates/active_evaluation.html",
			controller: "AdminController",
			resolve: {
				this: function($location, LoginFactory){
					if(LoginFactory.getRole() !== 'admin'){
						$location.path('/');
					}
				}
			}		
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
}]);