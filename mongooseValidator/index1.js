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
    price:{ 
            type:Number,
            required: function(){return this.onSale}
        }
});


//Model
const Game = mongoose.model('Game', gameSchema);

//create an object ad insert it to the database

async function saveGame(){
    const game = new Game({
        title: "NFS",
        publisher: "Nintendo",
        tags:["adventure", "action"],
        onSale:true,
        price:100
    });

    try{
        const result = await game.save();
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }
}

saveGame()