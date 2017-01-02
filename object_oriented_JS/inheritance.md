The technique used in JavaScript to share functionality between similar types of objects is known as prototypal inheritance.

The prototype chain is a new concept and shows you the power of JavaScript's object oriented approach to programming.
You'll see that prototypes that you encapsulate share the code with related objects very easily.

```js

function Teacher(firstName, lastName, roomNumber) {
  this.room = roomNumber;
  Person.call(this, firstName, lastName);
}

Teacher.prototype = Object.create(Person.prototype);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
 return this.firstName + " " + this.lastName;
};
```
