app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {
		var username, role, token;
		return {
			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://localhost:19358/doc/Api/POST-api-v1-login", { user: name, pass: password })
				.success(function(data, status, headers) {
					username = name;
					token = data.token;
					role = data.role;
					deferred.resolve({ username: name, role: data.role, token: data.token });
				}).error(function() {
					deferred.reject();
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