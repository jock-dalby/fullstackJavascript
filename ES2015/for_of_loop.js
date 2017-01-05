'use strict';

let teachers = [
    { name: 'Ken', comments: 'Amazing', rating: 4 },
    { name: 'James', comments: 'Astounding', rating: 3 },
    { name: 'Dave', comments: 'Astonishing', rating: 3 },
    { name: 'John', comments: 'Accelerating', rating: 2 },
    { name: 'Andrew', comments: 'Arm-chair-ing', rating: 3 },
    { name: 'Elizabeth', comments: 'Accepting', rating: 5 },
    { name: 'Nick', comments: 'Automating', rating: 6 },
    { name: 'Sarah', comments: 'Amplifying', rating: 7 },
    { name: 'Alena', comments: 'Appending', rating: 8 }
];

// Written using forEach loop

teachers.forEach(teacher => {
  console.log(teacher.name); // All 9 teacher names are logged
  if (teacher.name === 'Nick') {
    console.log(teacher.rating); // Only Nick's score is logged
  }
});

// Re-written using ES2015 for...of syntax

for (let teacher of teachers) {
  console.log(teacher.name);
  if (teacher.name === 'Nick') {
    console.log(teacher.rating);
    break;
  }
}

// Same result;

/*

ES2015 has a way to iterate over an array of values and break out of the loop when needed. By rewriting the for each loop using the new for of syntax, we can short circuit the loop or break out of the loop after it logs

Keep in mind that for of can not be used with regular objects. You'd want to use the for in statement instead when looping over object properties.

However, for of can be used with any interval object like strings, arrays, maps, and sets.

*/
