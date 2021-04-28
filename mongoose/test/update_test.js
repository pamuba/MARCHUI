const assert = require("assert");
const MarioChar = require("../models/marioChar");
const mongoose = require("mongoose");

xdescribe("Updating Records", function () {
    var char
  beforeEach(function (done) {
    char = new MarioChar({
      name: "Mario",
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done(); //we can go for the next test
    });
  });


  //define individual tests
  it("Updates one record to the database", function (done) {
      MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
         MarioChar.findOne({_id:char._id}).then(function(result){
             assert(result.name === 'Luigi')
             done();
         })
      
      })
  });
});
