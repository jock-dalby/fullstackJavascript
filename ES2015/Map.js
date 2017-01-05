'use strict';

let classroom = new Map();

let jockDB = { name: 'Jock', age: 30},
    neleTV = { name: 'Nele', age: 32},
    jockDalby = { name: 'Jock', age: 30},
    neleTaevere = neleTV;

classroom.set('jockDB', jockDB);
classroom.set('neleTV', neleTV);
classroom.set('jockDalby', jockDalby)

console.log('Classroom size: ', classroom.size); // logs 3

// .has()

if (classroom.has('jockDB')) console.log('jock DB is in the classroom');
if (classroom.has('neleTV')) console.log('nele TV is in the classroom');
if (classroom.has('jockDalby')) console.log('jock Dalby is in the classroom');


// .get()

console.log('jockDB:', classroom.get('jockDB')); // logs jockDB: { name: 'Jock', age: 30 }

// for(let)

for (let student of classroom) {
  console.log(`'${student[0]}': ${student[1].name} is ${student[1].age} years old.`);
}

// .delete()

classroom.delete('jockDB');

console.log('jockDB:', classroom.get('jockDB')); // logs undefined

// .clear()

classroom.clear(); // clears the classroom

console.log('Classroom size: ', classroom.size); // logs 0
