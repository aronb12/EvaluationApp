app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {

		var token;
		var user = {};
		return {

			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://dispatch.ru.is/h22/api/v1/login", { user: name, pass: password })
				.success(function(data, status, headers){
					token = data.Token;

					user.username = data.User.Username;
					user.email = data.User.Email;
					user.fullName = data.User.FullName;
					user.ssn = data.User.SSN;
					user.role = data.User.Role;
					$http.defaults.headers.common.Authorization = "Basic " + token;

					var result = new Array(token, user);

					deferred.resolve(result);
				}).error(function() {
					deferred.reject(status);
				});

				return deferred.promise;
			},
			getToken: function() {
				return token;
			},
			getUsername: function() {
				return user.username;
			},
			getRole: function() {
				return user.role;
			},
			getEmail: function(){
				return user.email;
			},
			getFullName: function(){
				return user.fullName;
			},
			getSSN: function(){
				return user.ssn;
			},
			getUser: function(){
				return user;
			},
			getAuth: function(){
				return $http.defaults.headers.common.Authorization;
			}
		};
	}
]);