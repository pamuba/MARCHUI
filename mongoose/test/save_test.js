const mongoose = require('mongoose');
const MarioChar = require('../models/marioChar')
const assert = require('assert')

//test suite
xdescribe("Saving Records", function(){

    xit('Saves a new record to the database', function(done){
        var char = new MarioChar({
            name:'Marion'
        });
        char.save().then(function(){
            assert(char.isNew === false)
            done()//Mocha
        })
    })
})