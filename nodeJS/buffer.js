// var buffer = Buffer.alloc(8);
// console.log(buffer)

// var buffer = Buffer.from([8,9,7,5,3,0,9])
// console.log(buffer)

// var buffer = Buffer.from("I'm a string","utf-8")
// console.log(buffer)
// console.log(buffer.toString())

// var buffer = Buffer.alloc(16)

// n = buffer.write("Hello", "utf-8")
// console.log(buffer)

// console.log(n)





// var buffer = Buffer.alloc(16)
// n = buffer.write("Hello", 5, "utf-8")
// console.log(buffer)


var buffer = Buffer.alloc(16)
n = buffer.write("Hello World!", "utf-8")
console.log(buffer)
console.log(buffer.toString("utf-8", 0, 12))


buffer[12] = buffer[11]
buffer[13] = 35;
buffer[14] = buffer[13]
buffer[15] = 51
console.log(buffer.toString())

