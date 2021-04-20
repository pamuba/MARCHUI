var app = angular.module("app", []);
app.controller("emp", function($scope){
    $scope.msg = "This is the scope message"
});

app.directive("myInfoMsg", function(){
    return {
        // template: "<h2><b>This is a messsage</b><h2>"
        templateUrl: "my-info-msg.html"
    }
})