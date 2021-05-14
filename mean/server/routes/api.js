const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Video = require('../models/video')

const db = "mongodb://localhost:27017/videoplayer";

mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true },function(err){
    if(err){
        console.log('Error!!'+err)
    }
    else{
        console.log("Connected to MongoDB");
    }
})
//get all
router.get('/videos', function (req, res){
   console.log('Get request for all the videos')
   Video.find({})
        .exec(function(err, videos){
            if(err){
                console.log("Error retrieving videos")
            }else{
                res.json(videos);
            }
        })

});

//get id
router.get('/videos/:id', function (req, res){
    console.log('Get request for a single video')
    Video.findById(req.params.id)
         .exec(function(err, video){
             if(err){
                 console.log("Error retrieving video")
             }else{
                 res.json(video);
             }
         })
 
 });

 //post a video

 router.post('/video', function(req, res){
     console.log('Post a video')
     var newVideo = new Video();

     newVideo.title = req.body.title;
     newVideo.url = req.body.url;
     newVideo.description = req.body.description;  
     newVideo.save(function(err, insertedVideo){
        if(err){
            console.log("Error saving a video")
        }else{
            res.json(insertedVideo);
        }
     })
     
 });


router.put('/video/:id', function(req, res){
    console.log('Update a video')
    Video.findByIdAndUpdate(req.params.id,
    {
        $set:{title:req.body.title, url:req.body.url, description:req.body.description}
    },
    {
        new:true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updaing Video")
        }
        else{
            res.json(updatedVideo)
        }
    }
  )
});
//deleting
router.delete('/video/:id', function(req,res){
    console.log("Deleting a video")

    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting a video");
        }
        else{
            res.json(deletedVideo)
        }
    })
})

module.exports = router;