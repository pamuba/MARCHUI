//Scoping 
// function fun(){
//     var a = "LOL"
//     let b = "HI"
//     console.log(a, ' ', b)
//     {
//         c = "horse"
//         let d = "apple"
//         console.log(c ,' ', d)
//     }
//     console.log(c)
//     // console.log(d)
// }
// fun()
// console.log("------------------------------"+c)

// var funcs = [];
// // let's create 3 functions
// for (i = 0; i < 3; i++) {
//   // and store them in funcs
//   funcs[i] = function() {
//     // each should log its value.
//     console.log("My value: " + i);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j]();
// }


//HOISTING
// function fun(){

//     //var a;
//     //let a;
//     console.log(a);
//     let a = 101;
//     console.log(a)
// }
// fun();

//REDECLERATION
// let a = 123;
// let a = 111;

// const PI = 333;
// PI = 12345;

// // why is there debate about using var? a lot of developers don't want to use it at all

// i = 23;


// i = 34;

// var id = 34;

var name = "John"
var name1 = new String("John")