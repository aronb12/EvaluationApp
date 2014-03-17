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
					deferred.resolve(data);
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

				var deferred = $q.defer();
				$http.post('http://dispatch.ru.is/h22/api/v1/evaluationtemplates', {
					TitleIS: titleIS,
					TitleEN: titleEN,
					IntroTextIS: introTextIS,
					IntroTextEN: introTextEN,
					CourseQuestions: courseQuestions,
					TeacherQuestions: teacherQuestions
				})
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(){
					deferred.reject(status);
				});

				return deferred.promise;

			},
			activateEvaluation: function(id){
				//calls /api/vi/evaluations - POST
				

			}
		};
	}
]);