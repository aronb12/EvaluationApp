app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {
		var username, role, token;
		return {
			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://dispatch.ru.is/h22/api/v1/login", { user: name, pass: password })
				.success(function(data, status, headers) {
					console.log(data);
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