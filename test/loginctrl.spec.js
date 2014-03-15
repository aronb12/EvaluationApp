describe("LoginController tests", function() {
    var $scope, $location, $rootScope, controller;

    beforeEach(module("EvaluationApp"));
    beforeEach(inject(function($injector, $controller) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        controller = $controller("LoginController", {
            "$scope": $scope
        });
    }));


    it('login should have something with test', function() {
        expect($scope.test).toBe("test");
    });
})