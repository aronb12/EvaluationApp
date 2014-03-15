describe("HomeController tests", function() {
    var $scope, $location, $rootScope, controller;

    beforeEach(module("EvaluationApp"));
    beforeEach(inject(function($injector, $controller) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        controller = $controller("HomeController", {
            "$scope": $scope
        });
    }));


    it('Home should have something with test', function() {
        expect($scope.test).toBe("test");
 
    });
})