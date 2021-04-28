const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/validation', { useNewUrlParser: true , useUnifiedTopology: true})
        .then(()=>console.log("Connected to MongoDB"))
        .catch(err => console.log("Error:", err.message))

//Schema
const gameSchema = new mongoose.Schema({
    title: {type:String, required:true},
    publisher: String,
    tags:[String],
    date:{ type:Date, default: Date.now},
    onSale:Boolean,
    price:Number
});


//Model
const Game = mongoose.model('Game', gameSchema);

//create an object ad insert it to the database

async function saveGame(){
    const game = new Game({
        title: "NFS",
        publisher: "Nintendo",
        tags:["adventure", "action"],
        onSale:false,
        price:100
    });


    // const result = await game.save()
    //                         .catch(err=>console.log(err.message));
    
    // console.log(result)

    try{
        const result = await game.save();
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }
}

saveGame()