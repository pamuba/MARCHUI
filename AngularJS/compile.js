var app = angular.module('app', [])
app.controller('msg',[ '$scope' , function($scope){

}]);
app.directive('message', function($interpolate){
    return {
        compile: function(tElement, tAttributes){
            console.log(tAttributes.text + " -In compile phase")
            // tElement.css("border", "1px solid #C0C0C0");
            return {
                pre: function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " -In pre phase")
                },
                // post link fn is the best place to modify the DOM
                post:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text + " -In post phase")
                    if(iAttributes.text === "3")
                    {
                        iElement.css("border", "1px solid red");
                    }
                    //best place to access the DOM of an element
                    iElement.on("click", scope.btnClick);
                },
            }

        },
        controller: function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            console.log(v + " -In controller phase")

            // any event handling related to the scope, then it should be provided through the controller
            $scope.btnClick = function(){
                alert(v);
            }
        }
        // because compile phase only handle paring does not excute anything
    }
})