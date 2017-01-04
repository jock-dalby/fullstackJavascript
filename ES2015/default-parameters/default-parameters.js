'use strict';

//ES5

function greet(name, timeOfDay) {
  name = name || 'Jock';
  timeOfDay = timeOfDay || 'Day';
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet();

// ES6

function greet2(name = 'Jock', timeOfDay = 'Day') {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet2();

greet2(undefined, 'Afternoon');
greet2('Mr Dalby', undefined)
