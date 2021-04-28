const assert = require("assert");
const MarioChar = require("../models/marioChar");
const mongoose = require("mongoose");

xdescribe("Finding Records", function () {
  
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
  it("Finds one record to the database", function (done) {
      MarioChar.findOne({name:'Mario'}).then(function(result){
        assert(result.name === 'Mario')
        done();
      })
  });
});
