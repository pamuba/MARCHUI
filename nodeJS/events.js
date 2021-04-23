var events = require('events');
var util = require('util')

// let myEmitter = new events.EventEmitter();

// myEmitter.on('run', function(msg){
//     console.log("Program Running ", msg)
// })

// myEmitter.emit('run', 'The message')

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter)

var john = new Person("John")
var mary = new Person("Mary")

var people = [john, ,mary]

people.forEach(function(person){
    person.on('jump', function(){
        console.log(person.name+ " is jumping")
    })
})

john.emit('jump')