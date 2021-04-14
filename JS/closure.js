function outer(a,b){
    var outerA = 22;

    function inner(c){
        console.log(outerA)
        console.log(a)
        console.log(b)

        function innermost(){
            console.log("From Innermost:"+outerA)
        }
        innermost()
    }
    
    return inner
}

inn = outer(1,2)
inn(12)