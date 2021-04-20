var app = angular.module('app',[]);
app.controller('emp', function($scope){
    $scope.o = {
        a:1,
        b:2,
        c:3
    }
    $scope.$watch("o", function)
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