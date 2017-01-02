// Below is a dice Constructor function where you can specify number of sides to create a new dice.

function Dice (sides) {
  this.sides = sides;
  this.roll = function () {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  };
}

const diceWithSixNumbers = new Dice(6);
const diceWithTwelveNumbers = new Dice(12);

console.log(diceWithSixNumbers.roll === diceWithTwelveNumbers.roll) // returns false

// Or using prototypes => This way the function is oly created once and all new instance reference it. Using the above constructor function, a new method is created everytime a ne Dice instance is made.

function ProtoDice (sides) {
  this.sides = sides;
}

ProtoDice.prototype.roll = function () {
  const randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
};

const diceWithEightNumbers = new ProtoDice(8);
const diceWithTenNumbers = new ProtoDice(10);

console.log(diceWithEightNumbers.roll === diceWithTenNumbers.roll) // returns true
