var fs = require('fs')

// var read = fs.readFileSync('data.txt', 'utf-8');
// console.log(read)
// fs.writeFileSync('write.txt', read);


// fs.readFile('data.txt', 'utf-8', function(err, data){
 
//     //callback for the error not for the data
//         fs.writeFile('w.txt',data , (err)=>{});
    
// })


//removing a file
// fs.unlink('w.txt', (err)=>{
//     console.log(err.message)
// })

//removing a directory
fs.rmdir('a', (err)=>{
    if(err)
        console.log(err.message)
})