const assert = require("assert");
const MarioChar = require("../models/marioChar");
const mongoose = require("mongoose");

describe("Deleting Records", function () {
  
  beforeEach(function (done) {
    var char = new MarioChar({
      name: "Mario",
    });
    char.save().then(function () {
      assert(char.isNew === false);
      done(); //we can go for the next test
    });
  });


  //define individual tests
  it("Deletes one record to the database", function (done) {
      MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
         MarioChar.findOne({name:'Mario'}).then(function(result){
             assert(result === null)
         })
        done();
      })
  });
});
