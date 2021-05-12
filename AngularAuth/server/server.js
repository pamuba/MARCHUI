
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api')
const cors = require('cors')

const PORT = 3000

const app = express()
app.use(cors())
// app.use(bodyParser.json())
app.use(express.json())
//localhost:3000/api
app.use('/api', api)

app.get('/', (req, res)=>{
    res.send("Hello from Server");
})

app.listen(PORT, function(){
    console.log('Server Running');
})

