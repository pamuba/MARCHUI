// var sum =  x => {
//     console.log("Before")
//     return x+x
// }
// // if you have multiple statements / operations then we need the return right?
// Another question, can you explain the difference between null, undefined, and undeclared? 

// console.log(sum(1))

//1. Arrow fns dont have this, but borrows from the outer scope
//2. Arrow funs cant be used with new -- bcoz pt 1
//3. Arrow functions have no "arguments"
//4. cant be called with super

//arguments is an array like pre defined object
function add()
{
    sum = 0
    for (let i = 0; i < arguments.length; i++) {
       
        sum += arguments[i]
    }
    console.log( arguments instanceof Array )
    return sum
}

console.log(add(1,2,3,4,5))

// let gr = {
//     title:"Main Group",
//     employees:['John', "Will", "Alice"],
//     showList(){
//         this.employees.forEach(
//             emp => console.log(this.title+': '+emp)
//         )
//     }
// }
// gr.showList()

// let gr = {
//     title:"Main Group",
//     employees:['John', "Will", "Alice"],
//     showList(){
//         this.employees.forEach(
//             function(emp){
//                 console.log(this.title+': '+emp)
//             }
//         )
//     }
// }
// gr.showList()