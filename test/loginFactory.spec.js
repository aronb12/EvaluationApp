describe("LoginFactory tests", function() {
    var $httpBackend;
    var loginFactory;

    beforeEach(module("EvaluationApp"));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');

        // Intercept HTTP requests and do the following:
        $httpBackend.when('POST', 'http://localhost:19358/doc/Api/POST-api-v1-login').respond({role: "student", token: "xxx"});

        // Create a fresh instance of the LoginFactory:
        loginFactory = $injector.get("LoginFactory");
    }));

    it("is possible to login as 'einarke12' and get a token with 'xxx'", function() {
        loginFactory.login("einarke12").then(function(data) {
            expect(loginFactory.getUsername()).toBe(data.username);
            expect(data.username).toBe("einarke12");

            expect(loginFactory.getToken()).toBe(data.token);
            expect(data.token).toBe("xxx");

            expect(loginFactory.getRole()).toBe(data.role);
            expect(data.role).toBe("student");
        });
        $httpBackend.expectPOST('http://localhost:19358/doc/Api/POST-api-v1-login');
        $httpBackend.flush();
    })
})