// var ob = {};

// var a = "foo"
// ob[a] = "foo value"

// console.log('Before:', Object.keys(ob))

// ob.hello = 33;

// ob[4] = 55;

// delete ob.hello

// console.log('After:', Object.keys(ob))

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); 

// for(const n of map.keys()){
//     console.log(typeof n)
// }

console.log(map.get('1'))



// i am confusing about the js size naming, 
//why sometime they use size(), somtimes use size, and sometimes use length 