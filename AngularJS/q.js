var app = angular
                .module('myApp', [])
                .controller("myController", function($q, $scope){
                    function add(x,y){
                        var q = $q.defer();
                        setTimeout(function(){
                            var result = x + y;
                            if(result >= 0)
                                q.resolve(x+y)
                            else{
                                q.reject('Negative Value: '+ result);
                            }
                        },100);
                        return q.promise;
                    }

                    //promise chaining
                    var startTime = Date.now();
                    add(5,2)
                    .then(function(result){
                        return add(result , -10)
                    })
                    .then(function(result){
                        return add(result , 1)
                    }/*, function(failure){}*/)
                    .then(function(result){
                        $scope.result = result;
                    })
                    .catch(function(failure){
                        $scope.failure = failure;
                    })
                    .finally(
                       function(){
                        $scope.elapsedTime = Date.now() - startTime;
                       }
                    )

                    // add(5,2, function(result){
                    //     add(result, 3, function(result){
                    //         add(result, 1, function(result){
                    //             $scope.result = result;
                    //             $scope.elapsedTime = Date.now() - startTime;
                    //         } , function(error){/* implement */});
                    //     }, function(error){/* implement */});
                    // }, function(error){/* implement */});
                });
        
                