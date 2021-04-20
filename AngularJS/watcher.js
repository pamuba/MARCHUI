var app = angular.module('app',[]);
app.controller('emp', function($scope){

    $scope.emps = [
        {empno:"1001", ename:"John"},
        {empno:"1002", ename:"Jim"},
        {empno:"1003", ename:"Jill"},
        {empno:"1004", ename:"Mill"},
    ];

    $scope.addEmp = function(){
        var newEmpno = 100 + $scope.emps.length + 1;
        var newName = "ename"+newEmpno;

        $scope.emps.push({empno:newEmpno, ename:newName})
    }

    $scope.modify3rdEmp = function(){
        $scope.emps[2].ename = "Test"
    }

    // $scope.$watch('emps', function(newVal, oldVal){
    //     console.log("No. of Employees:"+ $scope.emps.length)
    // })

    $scope.$watchCollection('emps', function(newVal, oldVal){
        console.log("No. of Employees:"+ $scope.emps.length)
    })

    // $scope.$watch('emps', function(newVal, oldVal){
    //     console.log("No. of Employees:"+ $scope.emps.length)
    // }, true)

    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // $scope.$watch("o", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.o.c = $scope.o.a * $scope.o.b;
    //     }
    // }, true);

// Sorry teacher, 
// but if newVal == oldVal, do we say the watcher is still "working"? 
// Do we still go into the $watch function?

    // $scope.$watchGroup(["o.a", "o.b"], function(newVal, oldVal){
    //     // console.log("Inside")
    //         if(newVal != oldVal){
    //             $scope.o.c = $scope.o.a * $scope.o.b;
    //         }
    //     });


    

    // $scope.a = 1;
    // $scope.b = 2;
    // $scope.c = 3;
    

    
    // $scope.$watchGroup(["a","b"], function(newVal, oldVal){
    //     console.log(newVal, ' ', oldVal)
    //     if(newVal != oldVal){
    //         $scope.c = $scope.a * $scope.b;
    //     }
    // })

    // $scope.updateC = function(){
    //     $scope.c = $scope.a * 4;
    // }

    // // manual watcher for c
    // $scope.$watch("c", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         console.log("Updated C to "+newVal)
    //     }
    // });
    // $scope.$watch("a", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.c = $scope.b * 2;
    //     }
    // });
    // $scope.$watch("b", function(newVal, oldVal){
    //     if(newVal != oldVal){
    //         $scope.b = $scope.a * 2;
    //     }
    // });
})