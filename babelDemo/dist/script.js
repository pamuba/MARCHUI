"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal() {
  _classCallCheck(this, Animal);
};

var sum = function sum(a, b) {
  return a + b;
};

var a = function a() {};

var a = function a(b) {
  return b;
};

var _double = [1, 2, 3].map(function (num) {
  return num * 2;
});

console.log(_double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
console.log(bob.printFriends());