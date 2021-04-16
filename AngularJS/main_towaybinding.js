// var myApp = angular
//              .module("myModule",[])
//              .controller("myController", function($scope){
//                 var employee = {
//                     firstName:"John",
//                     lastName:"Wick"
//                 }
//                 $scope.employee = employee
//              })

var myApp = angular
             .module("myModule",[])
             .controller("myController", function($scope){
                var employees = [
                    {firstName:"John", lastName:"Will", dept:"Sales"},
                    {firstName:"Mary", lastName:"Will", dept:"Sales"},
                    {firstName:"John", lastName:"Will", dept:"Sales"},
                    {firstName:"John", lastName:"Will", dept:"Sales"},
                    {firstName:"John", lastName:"Will", dept:"Sales"},
                ]
                $scope.employees = employees
             })