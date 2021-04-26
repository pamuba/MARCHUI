var http = require('http')
var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname+'/data.txt', {highWaterMark:250})
// console.log(__dirname+'/data.txt')

myReadStream.on('data', function(chunk){
    console.log('New Chunk Recieved');
    console.log(chunk)
    console.log(chunk.length)
})

