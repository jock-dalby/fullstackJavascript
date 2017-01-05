'use strict';

let classroom = new Set();

let jockDB = { name: 'Jock', age: 30},
    neleTV = { name: 'Nele', age: 32},
    jockDalby = { name: 'Jock', age: 30},
    neleTaevere = neleTV;

classroom.add(jockDB);
classroom.add(neleTV);

if (classroom.has(jockDB)) console.log('Jock DB is in da house');
if (classroom.has(neleTV)) console.log('Nele TV is in da house');
// Both will log to the console

if (classroom.has(jockDalby)) console.log('Jock Dalby is in da house');
// jockDalby IS NOT logged to the console because he has not been added to the classroom set

if (classroom.has(neleTaevere)) console.log('Nele Taevere is in da house');
// neleTaevere IS logged to the console because the object, neleTaevere, is referencing the same object that neleTV is referencing.

console.log('classroom size:', classroom.size); // Although neleTaevere is logged as being in the classroom, the classroom size is still 2 because she has not been added to the classroom.

classroom.add(neleTV); // Ass neleTV to the classroom set one more time and check the size

console.log('classroom size:', classroom.size); // Still logged as size of 2, because a set must have unique values.

classroom.delete(jockDB); // remove a student from classroom

console.log('classroom size:', classroom.size); // Classroom size is now 1

// Create an array of students from the classroom set
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents); // returns [ { name: 'Nele', age: 32 } ]

// To do the reverse and create a set from an existing array
let alumni = new Set(arrayOfStudents);
console.log('Alumni size:', alumni.size); // returns Alumni size: 1
