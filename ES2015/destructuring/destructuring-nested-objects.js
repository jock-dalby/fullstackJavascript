'use strict';

let parentObject = {
  title: 'Super Important',
  childObject: {
    title: 'Equally Important'
  }
}

let { title, childObject: { title: childTitle } } = parentObject

console.log(childTitle); // returns 'Equally Important'


/*

We see that child object is nested within a parentObject, so, to get the value of this deeply nested title Equally Important, we target parentObject then assign the title of childObject to childTitle. Now, logging childTitle to the console, Outputs the value equally important.

*/
