const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Create the schema
const MarioCharSchema = new Schema({
    name:String,
    weight:Number
});

//mariochars as the collection name

const MarioChar = mongoose.model('mariochar', MarioCharSchema)
module.exports = MarioChar

