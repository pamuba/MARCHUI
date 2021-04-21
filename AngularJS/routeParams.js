var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/sumurl/:a/:b', {
            templateUrl: 'sumurl.html',
            controller: 'sumurl'
        })
        .when('/suminput', {
            templateUrl: 'suminput.html',
            controller: 'suminput'
        })
        .when('/calc/:option/:a?/:b?', {
            redirectTo: function(params, path, search){
                // console.log(params)
                // console.log(path)
                // console.log(search)

                if(params.option == "sum"){
                    return '/sumurl/'+ (params.a - 0) + '/' + (params.b - 0)
                }
                else if(params.option == "input"){
                    return '/suminput'
                }
                else{
                    return '/';
                }
            }
        })
        .when('/sumfour/:a/:b/:c?/:d?', {
            templateUrl: 'sumfour.html',
            controller: 'sumfour'
        })
        .when('/',{
            template:'<b>Welcome to the site</b>'
        })
        .otherwise({
            template:'<b>404....click the links on the left</b>'
        })
}]);

app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}])

app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        $location.path(url)
    }
}])

app.controller('sumfour', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
    $scope.c = $routeParams.c;
    $scope.d = $routeParams.d;
}])
