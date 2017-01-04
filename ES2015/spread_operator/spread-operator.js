'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];

const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);

/*

A spread operator expands an array or any type of expression. The original flavors and new flavors array are getting combined with the inventory array. So instead of using the array.concant method to return a new array with the combined flavors, I'm using the spread operator, which consists of the three dots. So with the spread operator, I'm passing all the values of originalFlavors and newFlavors to the inventory array by pre pending the three dots to the variable names. And when I run the file in the console it logs the full inventory within the same array.
*/

'use strict';

function myFunction (name, iceCreamFlavor) {
  console.log(`${name} really likes ${iceCreamFlavor} ice cream.`)
}

const args = ['Jock', 'Chocolate'];
myfunction(...args); // Jock really likes Chocolate ice cream.

/*

Here we split an array into single arguments, then pass them to a function as separate arguments using the spread operator.

*/
