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