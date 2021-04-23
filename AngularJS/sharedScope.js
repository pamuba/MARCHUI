var app = angular.module('app',[])

app.controller('sample', ['$scope', function($scope){
    $scope.a = 10;
    $scope.b = 20;
}]);

app.directive('message', function(){
    return {
        templateUrl : "info-msg.html",
        scope: {
            
        }
    }
})