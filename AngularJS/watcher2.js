var app = angular.module('app',[]);
app.controller('emp', function($scope, $rootScope){

    $scope.a = 1
    $scope.b = 2
    $scope.s = 0;

    $scope.calcSum = function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    }
    // $scope.c = 3

    // $scope.$watch('a', function(newV, oldV){
    //     if(newV != oldV)
    //     {
    //         console.log("a is modified to "+newV)
    //     }
    // })
    // $scope.$watch('b', function(newV, oldV){
    //     if(newV != oldV)
    //     {
    //         console.log("b is modified to "+newV)
    //     }
    // })
    // $scope.$watch('c', function(newV, oldV){
    //     if(newV != oldV)
    //     {
    //         console.log("c is modified to "+newV)
    //         if($scope.c > 50){
    //             $scope.a = 1000;
    //         }
    //     }
    // })
    // $rootScope.$watch(function(){
    //     console.log('--- digest iteration started ---')
    // })
});

var btnClick = function(){
    var $scope = angular.element($('#div1')).scope();
    // $scope.s = Number($scope.a) + Number($scope.b);
    // $scope.$apply();

    $scope.$apply(function(){
        $scope.s = Number($scope.a) + Number($scope.b);
    })
}

