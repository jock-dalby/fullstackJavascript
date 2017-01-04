'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee', item4: 'hammer' };

let {item1, item2} = toybox;

let {item4: tool} = toybox;

console.log(item1, item2, item3); // error:'item3 is not defined'

console.log(tool) // return hammer
/*

Here we have a toybox object with four items in it. Using destructuring, we can store the values of item1 of and item2 in a new variable and log them to the console. But if we try to log item3 it throws an exception because item3 is not defined in this new variable.

You may also want to rename a variable from the initial property key to something that better represents the value. Destructuring allows you to declare new variables by placing the key on the left side of a colon and the new variable name on the right side. if I console.log this new 'tool' variable, it returns hammer.

*/
