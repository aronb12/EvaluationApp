describe("LoginFactory tests student", function() {
    var $httpBackend, 
        loginFactory;

    beforeEach(module("EvaluationApp"));
    beforeEach(inject(function($injector) {
        
        $httpBackend = $injector.get('$httpBackend');

        // Intercept HTTP requests and do the following:
        $httpBackend.when('POST', 'http://dispatch.ru.is/h22/api/v1/login').respond({user:"einarke12", role: "student", token: "xxx"});
        

        // Create a fresh instance of the LoginFactory:
        loginFactory = $injector.get("LoginFactory");
    }));
    
    it("is possible to login as 'einarke12' and get a token with 'xxx'", function() {
        loginFactory.login("einarke12", " ").then(function(data) {
            expect(loginFactory.getUsername()).toBe(data.username);
            expect(data.username).toBe("einarke12");

            expect(loginFactory.getToken()).toBe(data.Token);
            expect(data.Token).toBe("xxx");

            expect(loginFactory.getRole()).toBe(data.Role);
            expect(data.Role).toBe("student");
        });
        $httpBackend.expectPOST('http://dispatch.ru.is/h22/api/v1/login');
        $httpBackend.flush();
    })
})