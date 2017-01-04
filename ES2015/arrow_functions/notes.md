
#Arrow functions

Arrow functions are often referred to as lambda function in other programming languages. They provide a short syntax for defining functions and simplify function scope.

Arrow functions don't require parentheses when your function only takes a single parameter. You can even omit the curly braces when you're simply returning the result of your expression like in arrow-this.js.

More info: 
https://googlechrome.github.io/samples/arrows-es6/

###arrow-keys.js

wen the file arrow-keys.js, we have a person constructor which takes some data and has a method called getKeys that returns the current object's keys. Then, we have instantiated a new person and gave it a name Alena with a role of teacher. And right below we console.log the keys, and below that, we reassign the getKeys method to a getKeys variable outside of the person instance. And finally, we execute the new getKeys function and log it to the console. When we run this file in the console we see the scope for getKeys has changed, and the keys are not what we expected.

The second getKeys does not refer to Alena and it's throwing the exception cannot convert undefined or null to object. So what we want is to get the same results for both getKeys calls. Using ES 2015, there is one simple yet significant change we can make to the code to return the same results. we'll change the getKeys method from an anonymous function to an arrow function. Now an arrow function is defined with a set of parentheses, and the new arrow token. So now when we save this file and run it in the console we get the same results in both getKeys calls. So what the arrow, or lambda function does, is it binds the function to the instance of the person, no matter where it was called. In other words, this now refers to Alena.

###arrow-this.js.

This example introduces another new feature of ES2015, Promises. And you can find references to the Promise specification in the Teacher's Notes of this video. With Promises, callback functions are handed off to another scope to be called once an event is complete and because of this, you have to take extra care when handing off a callback function so that it has a way to access its original scope. In this example, we have a greet function on the classroom using the arrow function syntax. And here, the greet function calls greet on the instance of the teacher. Now here's where we're making sure we have access to the correct scope. It includes an immediately invoked function expression that returns a function which logs the name of the teacher and their greeting. And we also pass an error to the callback in the event an error happens.

With the arrow function, we can make this a lot easier to read with fewer lines of code. Then, instead of saying classroom.teacher.name, we'll say this.teacher.name. We can also pass the error to the callback using the arrow function.

So, now the promise returns then, we use our arrow function. The greeting is passed to our function and we log the message.
