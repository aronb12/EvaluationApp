app.controller("AdminController", [
	"$scope", "$http", "$location", "LoginFactory", "EvalFactory",
	function($scope, $http, $location, LoginFactory, EvalFactory){
		$scope.token = LoginFactory.getToken();
		$scope.user = LoginFactory.getUser();

		$scope.create = function(){
			$location.path('admin/create_evaluation');
		};

		$scope.active = function(){
			$location.path('admin/active_evaluation');
		};

		$scope.available = function(){
			$location.path('admin');
		};


		//practically everything below this line is test data
		$scope.testTitle = "";

		var test = 'test';
		//console.log(test);
		/*
		answers = [
			{ID: 1, TextIS: 'Svar1', TextEN: 'Answer1', ImageURL: 'none', Weight: 5},
			{ID: 2, TextIS: 'Svar2', TextEN: 'Answer2', ImageURL: 'none', Weight: 5}
		];

		questions = [{
			ID: 1, TextIS: 'spurningaTitill', TextEN: 'questionTitle', ImageURL: 'none', Type: 'serious', Answers: answers
		}];

		EvalFactory.createEvaluation('Titill', 'Title', 'Inngangur', 'Intro', questions, questions);*/
		
		EvalFactory.getEvaluations().then(function(data){
			$scope.testTitle = data.title;
			console.log(data);
		}).catch(function(errorMessage){
			console.log('Error: ' + errorMessage);
		});

		/*EvalFactory.getEvaluation(1).then(function(data){
			//console.log(data.TitleIS);
			$scope.testTitle = data.TitleIS;
		}).catch(function(errorMessage){
			console.log('Error: ' + errorMessage);
		});
		//var response = EvalFactory.getEvaluation(2);
		console.log($scope.testTitle);*/

		//console.log(test);
		$scope.test = "test";
	}
]);