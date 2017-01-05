'use strict';

class Bird {
  static changeColor(color) {
    this.color = color;
  }
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
}

/*
let redBird = new Bird;
console.log(redBird.color); // logs red
redBird.changeColor('blue');  // redBird.changeColor is not a function
console.log(redBird.color);
*/

// Fix this by

let redBird = new Bird;
console.log(redBird.color); // logs red
Bird.changeColor.call(redBird, 'blue');
console.log(redBird.color); // logs blue

/*

Another solution is to change static.changecolor to take two parameters

static changeColor(bird, color) {
    bird.color = color;
  }

  and then we can remove the call method from changeColor

  Bird.changeColor(redBird, 'blue');

*/
               
