'use strict';

function myFunction(name, ...params) {
  console.log(name, params);
}

myFunction("Jock", 1, 2, 3, 4, "Wellington") // returns Jock [1, 2, 3, 4, "Wellington"]

/*

A rest parameter collects the arguments passed to a function.

In myFunction there are two parameters, name and params and you'll notice that there are three periods before the params parameter. This is how you define a rest parameter in ES2015. Now params is just the name I used, you can name the rest parameter anything you want, as long as it has the three dots in front of it, and the rest parameter also needs to be the last parameter defined in the function signature, so you can place a rest parameter first.

The params parameter will gather the rest of the arguments after name into an array. That's why they are called rest parameters.

*/
