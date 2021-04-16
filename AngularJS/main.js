//module
var myApp = angular.module("myModule", []);


myApp.controller("myController", function($scope){
    var employee = {
        firstName:"John Wick",
        lastName:"Smith",
        department:"Sales",
        flag:"usa.jpg"
    }
    $scope.employee = employee
})

// myApp.controller("myController1", function($scope){
//     $scope.message = "New Controller"
// })