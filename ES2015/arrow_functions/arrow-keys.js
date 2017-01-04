'use strict';

var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];
  }
//  this.getKeys = function () {
//    return Object.keys(this);
//  }
  this.getKeys = () => {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process

// When run this code (node arrow-keys.js) console returns 'Cannot convert undefined or null to object' in relation to line 8.

// This is resolved with the insertion of an arrow function because it binds the function to the instance of the person no matter where it is called. In other words, this now refers to Alena.
