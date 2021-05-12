const express = require('express');
const router =  express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')


const db = "mongodb://localhost/eventsdb";


mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true}, err=>{
    if(err){
        console.err("Error!"+err)
    }else{
        console.log("Connected to Mongodb")
    }
})

//localhost:3000/api === /
router.get('/', (req, res)=>{
    res.send("From API route")
})

router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    //save to db
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(registeredUser)
        }
    })

});

router.post('/login', (req, res)=>{
    let userData = req.body

    User.findOne({email:userData.email}, (error, user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid password')
                }else{
                    res.status(200).send(user)
                }
            }
        }
    })
})


router.get('/events', (req, res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },
    ]
    res.json(events);
});

router.get('/special', (req, res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },  {
            "_id":"1",
            "name":"Auto Expo",
            "description":"The auto expo happening today",
            "data":"2021-5-12T18:25:43.511Z"
        },
    ]
    res.json(events);
})

module.exports = router