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

		if(LoginFactory.getUser().role === 'student'){
			EvalFactory.getStudentEvaluations()
			.then(function(data, status, headers){
				console.log(data);
			})
			.catch(function(){
				console.log('Error');
			});
		}

		if(LoginFactory.getUser().role === 'admin'){
			/*
			answers = [
				{ID: 1, TextIS: 'Svar1', TextEN: 'Answer1', ImageURL: 'none', Weight: 5},
				{ID: 2, TextIS: 'Svar2', TextEN: 'Answer2', ImageURL: 'none', Weight: 5}
			];

			questions = [{
				ID: 1, TextIS: 'spurningaTitill', TextEN: 'questionTitle', ImageURL: 'none', Type: 'serious', Answers: answers
			}];

			EvalFactory.createEvaluation('Titill', 'Title', 'Inngangur', 'Intro', questions, questions);*/
			
			/**/var startDate = new Date(2014, 2, 18, 0, 0, 0, 0);

			var endDate = new Date(2014, 2, 18, 17, 0, 0, 0);

			EvalFactory.activateEvaluation(3, startDate.toISOString(), endDate.toISOString())
			.then(function(data, status, headers){
				console.log(status);
			})
			.catch(function(status){
				console.log(status);
			});

			EvalFactory.getActivatedEvaluations().then(function(data){
				console.log(data);
			})
			.catch(function(errorMessage){
				console.log(errorMessage);
			});

			/*EvalFactory.getEvaluations()
			.then(function(data){
				$scope.testTitle = data.title;
				console.log(data);
			}).catch(function(errorMessage){
				console.log('Error: ' + errorMessage);
			});*/

			/*EvalFactory.getEvaluation(1).then(function(data){
				//console.log(data.TitleIS);
				$scope.testTitle = data.TitleIS;
			}).catch(function(errorMessage){
				console.log('Error: ' + errorMessage);
			});
			//var response = EvalFactory.getEvaluation(2);
			console.log($scope.testTitle);*/
		}
		$scope.test = "test";
	}
]);