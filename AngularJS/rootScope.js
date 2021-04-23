var sample = angular.module('sample', []).run(['$rootScope', function($rootScope){
    $rootScope.TexPercent = 40;
}]);

sample.controller("emp", ["$scope", '$rootScope',  function($scope, $rootScope){
    $rootScope.TexPercent = 30;
    $scope.Name = "John"
}])

sample.controller("empDetails", ["$scope", function($scope){
    $scope.Sal = 999999;
    $scope.Dept = "Sales"
}])


sample.controller("empPayCheck", ["$scope", '$rootScope', function($scope, $rootScope){
    $scope.getTexes = function(){
        return $scope.Sal * $rootScope.TexPercent/100;
    }
    $scope.getNet = function(){
        // console.log( $scope.Sal , ' ',$scope.getTexes())
        return $scope.Sal - $scope.getTexes()
    }
}])

