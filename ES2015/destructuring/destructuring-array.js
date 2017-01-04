'use strict';

let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

let [a, b, c, ...d] = widgets;

console.log(a); // widget1

console.log(d); // ['widget4', 'widget5']

/*

Here we assign the first three widgets to distinct variables and using the spread operator, store the remaining widgets in one separate array. We assign widgets 1, 2, and 3 to the variable names, a, b, and c, respectively. Then any variable after that gets stored in an array of d.

*/
