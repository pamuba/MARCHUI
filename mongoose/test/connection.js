const mongoose = require('mongoose')
const chalk = require('chalk')
const log = console.log;

// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
// log(chalk.blue.bgRed.bold('Hello world!'));
// log(chalk.green.inverse('Data Inserted'))


mongoose.Promise = global.Promise

//runs only once before all tests

before(function(done){
    //connect to mongodb
    mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true , useUnifiedTopology: true})

    mongoose.connection.once('open', function(){
        log(chalk.green.inverse('Connection has been made!'))
        done()
    }).on('error', function(error){
        log(chalk.red.inverse('Connection error:'+error.message))
    })
})


//runs before each test
beforeEach(function(done){
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    })
})
