app.factory("LoginFactory", [
	"$http", "$q",
	function($http, $q) {
		/*var username = "";
		var role = "";
		var status = "";*/
		var token;
		var user = {};
		return {

			login: function(name, password) {
				var deferred = $q.defer();

				$http.post("http://dispatch.ru.is/h22/api/v1/login", { user: name, pass: password })
				.success(function(data, status, headers){
					//console.log(data);
					token = data.Token;

					user.username = data.User.Username;
					user.email = data.User.Email;
					user.fullName = data.User.FullName;
					user.ssn = data.User.SSN;
					user.role = data.User.Role;

					var result = new Array(token, user);
					//console.log(result);

					deferred.resolve(result);
				/*});

				.success(function(data, status, headers) {
					console.log(data);
					username = name;
					token = data.Token;
					role = data.User.Role;
					deferred.resolve({ username: name, role: data.User.Role, token: data.token });*/

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
			}
		};
	}
]);