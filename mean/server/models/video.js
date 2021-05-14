const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder')

const Schema = mongoose.Schema

const videoSchema = new Schema({
    title:String,
    url:String,
    description:String
});

module.exports = mongoose.model('video', videoSchema, 'videos')

