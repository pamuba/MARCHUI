// const promise = new Promise((resolve, reject)=>{
//     // throw 'really bad'
//     // resolve('Good')
//     reject('bad')
// })
// .then((result)=>{
//     console.log(result)
//     return 1
// })
// .then((result)=>{
//     console.log(result)
//     return 2
// })
// .then((result)=>{
//     console.log(result)
//     return 3
// })
// .then((result)=>{
//     console.log(result)
//     return 4
// })
// .then((result)=>{
//     console.log(result)
//     return 5
// })
// .catch(err => {
//     console.log(err)
// })


const fs = require("fs");

// //old
// fs.readFile("data1.txt", (err, data1) => {
//   fs.readFile("data2.txt", (err, data2) => {
//     fs.readFile("data3.txt", (err, data3) => {

//       console.log(data1.toString());
//       console.log(data2.toString());
//       console.log(data3.toString());

//     });
//   });
// });


// new
// new Promise((resolve, reject) => {
//   fs.readFile("data1.txt", (err, data) => {
//     if (err) reject(err);
//     else resolve(data);
//   });
// })
//   .then((result) => {
//     console.log(result.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// //using promisify
// const util = require("util");
// var read = util.promisify(fs.readFile);

// read("data1.txt").then((data) => {
//   console.log(data.toString());
// });



// const util = require("util");
// var read = util.promisify(fs.readFile);

// Promise
//     .all([
//         read('data1.txt'),
//         read('data2.txt'),
//         read('data3.txt')
//     ])
//     .then( data => {
//         const [data1, data2, data3] = data
//         console.log(data1.toString())
//         console.log("=====================================================")
//         console.log(data2.toString())
//         console.log("=====================================================")
//         console.log(data3.toString())
//     })


const fs = require("fs");
const util = require("util");
const read = util.promisify(fs.readFile);

var run = async () => {
  // Promise version
  Promise.all([read("data1.txt"), read("data2.txt"), read("data3.txt")]).then(
    (data) => {
      const [data1, data2, data3] = data;
      console.log(data1.toString());
      console.log(data2.toString());
      console.log(data3.toString());
    }
  );

  //async/await versio
  const [data1, data2, data3] = await Promise.all([
    read("data1.txt"),
    read("data2.txt"),
    read("data3.txt"),
  ]);
  console.log(data1.toString());
  console.log(data2.toString());
  console.log(data3.toString());
};

run();