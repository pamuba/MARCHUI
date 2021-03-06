function AppCtrl($scope, $http){
    console.log("Hello World from Contrller");

    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            $scope.contactlist = response;
            $scope.contact = ""
        });
    }
    // $scope.contactList = [ ...$scope.contactList, res];
    refresh();
    $scope.addContact = function(){
        // console.log($scope.contact)
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response)
            refresh();
        });
    }
    $scope.remove = function(id){
        console.log(id)
        $http.delete('/contactlist/'+id).success(function(response){
            // console.log(response)
            refresh();
        });
    }
    $scope.edit = function(id){
        console.log(id);
        $http.get('/contactlist/'+id).success(function(response){
            $scope.contact = response;
        })
    }

    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/'+ $scope.contact._id, $scope.contact).success(function(response){
            refresh()
        })
    }
}