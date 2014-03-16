app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {
		var username = "";
		var role = "";
		var token = "";
		var status = "";
		return {
			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://dispatch.ru.is/h22/api/v1/login", { user: name, pass: password })
				.success(function(data, status, headers) {
					console.log(data);
					username = name;
					token = data.token;
					role = data.User.Role;
					deferred.resolve({ username: name, role: data.User.Role, token: data.token });
				}).error(function() {
					deferred.reject(status);
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