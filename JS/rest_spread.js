// //Rest of params

// //variable argument length
// function add(a,b,...args){
//  let sum = 0;
//  for(let a of args){
//      sum+=a
//  }
//  console.log(sum)
//  console.log( args instanceof Array)
// }

// add(1,1)
// add(1,1,1)
// add(1,1,1,1,1,1,1,1,1,1)

// let arr = [12,19,11]
// let arr1 = [312,129,711]
// console.log(Math.max(...arr, ...arr1, 12,-1))

// x = 101;
// y = 909;

// [x,y] = [y,x]
// console.log(x,y)

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("the secret")
        // reject("Some error happened")
    }, 2000)
})

// if it doesn't call resolve and reject, will the promise keep waitting?

promise
    .then(
        data=>console.log(data),
        // error=>console.log(error)
    )
    .catch(
        error=>console.log(error)
    )
    .finally(
        ()=>console.log("Always runs")
    )
