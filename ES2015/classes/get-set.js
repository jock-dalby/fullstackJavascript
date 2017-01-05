'use strict';

class Student {

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  set name(input) {
    let name = input.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }
  constructor({ firstName, lastName, age, interestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interestLevel = interestLevel;
  }
}

let stevenJ = new Student({firstName: 'Steven', lastName: 'Jones', age: 22});

console.log(stevenJ.name); // logs Steven Jones

stevenJ.name = "Steven Jones"; // returns an error, 'Cannot set property name of #<Student> which has only a getter'

// so add the set name() method

stevenJ.name = "Steven Jennings"; // This now changes the name of stevenJ
console.log(stevenJ.name); // logs Steven Jennings

/*

ES2015 introduces the get and set keywords, which provide a clean and easier way of defining getters and setters within a class. We use 'get' to retrieve and return a value and 'set' to assign or set a value.

ES2015 is just the beginning of a new era of JavaScript. Even though today's web browsers are adopting these new features rapidly, we still need to be cautious with how we implement them in our code. We can use transpilers like Babel which allow us to write modern JavaScript that is backwards compatible for older browsers.

*/
