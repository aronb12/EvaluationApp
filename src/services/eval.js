app.factory('EvalFactory', [
	'$http', '$q',
	function($http, $q){

		//var evaluations = new Array();

		return {

			getEvaluation: function(id){
				//GET api/v1/evaluationtemplates/{id}

				var deferred = $q.defer();

				$http.get('http://dispatch.ru.is/h22/api/v1/evaluationtemplates/' + id, {})
				.success(function(data, status, headers){
					//var evaluations = data;
					console.log(data);

					deferred.resolve("data");
				})
				.error(function(){
					deferred.reject(status);
				});

				return deferred.promise;
			},
			getEvaluations: function(){
				//GET api/v1/evaluationtemplates

				var deferred = $q.defer();

				$http.get('http://dispatch.ru.is/h22/api/v1/evaluationtemplates', {})
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(){
					deferred.reject(status);
				});

				return deferred.promise;
			},
			createEvaluation: function(titleIS, titleEN, introTextIS, introTextEN, courseQuestions, teacherQuestions){
				//POST api/v1/evaluationtemplates

				id = this.getEvaluations();
				console.log(id.length);

				/*var deferred = $q.defer();

				var courseQuestions = [{
						ID: 1,
						TextIS: 'Spurning 1',
						TextEN: 'Question 1',
						ImageURL: 'No image',
						Type: 'Type of question?',
						Answers: [{
							ID: 1,
							TextIS: 'Svar 1',
							TextEN: 'Answer 1',
							ImageURL: 'why does an answer need an image?',
							Weight: 5
						}]
					}];
				var teacherQuestions = [{
						ID: 1,
						TextIS: 'kennaraspurning 2',
						TextEN: 'teacher question 2',
						ImageURL: 'picture?',
						Type: 'type of question',
						Answers: [{
							ID: 1,
							TextIS: 'svar 1',
							TextEN: 'Answer 1',
							ImageURL: 'mynd?',
							Weight: 5
						}]
					}];

				$http.post('http://dispatch.ru.is/h22/api/v1/evaluationtemplates', {
					ID: 2,
					TitleIS: 'prufa2',
					TitleEN: 'test2',
					IntroTextIS: 'Þetta er prufa 2',
					IntroTextEN: 'Learn Icelandic!',
					CourseQuestions: courseQuestions,
					TeacherQuestions: teacherQuestions
				})
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(){
					deferred.reject(status);
				});

				return deferred.promise;*/

			},
			activateEvaluation: function(){
				//calls /api/vi/evaluations - POST
			}
		};
	}
]);