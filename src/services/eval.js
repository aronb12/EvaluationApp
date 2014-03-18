app.factory('EvalFactory', [
	'$http', '$q', 'LoginFactory',
	function($http, $q, LoginFactory){

		//var evaluations = new Array();

		return {
			//The following use api/v1/evaluationtemplates

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
			//The following use api/v1/evaluations
			activateEvaluation: function(id, startDate, endDate){
				//POST /api/vi/evaluations

				var deferred = $q.defer();

				$http.post('http://dispatch.ru.is/h22/api/v1/evaluations', {TemplateID: id, StartDate: startDate, EndDate: endDate})
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(status){
					deferred.reject(status);
				});

				return deferred.promise;
			},
			getActivatedEvaluations: function(){
				//GET api/v1/evaluations

				var deferred = $q.defer();

				$http.get('http://dispatch.ru.is/h22/api/v1/evaluations', {})
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(status){
					deferred.reject(status);
				});

				return deferred.promise;
			},
			//The following use api/v1/my/evaluations
			getStudentEvaluations: function(){
				//GET api/v1/my/evaluations

				var deferred = $q.defer();
				console.log($http.defaults.headers.common.Authorization);

				$http.get('http://dispatch.ru.is/h22/api/v1/my/evaluations')
				.success(function(data, status, headers){
					deferred.resolve(data);
				})
				.error(function(){
					deferred.reject();
				});

				return deferred.promise;
			}

		};
	}
]);