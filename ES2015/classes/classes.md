#Classes


###Classes

Classes are a common feature of many object oriented programming languages e.g. Java, Python, Rails, PHP and now JavaScript.

A class is really just a blueprint for creating objects that share similar properties and methods. In other words, classes simplify creating similar objects like a card but with different properties, like a different suit and card value. We've always been able to create objects in JavaScript but instead of classes, we've used JavaScript constructor functions and prototype all inheritance to do it.

ES2015 introduces the keyword class, making creating objects a bit simpler and a little more like other object oriented programming languages. However, under the hood, JavaScript is still a prototype-based language so you won't find all the features of a true object oriented language like, Java.

Classes are not a radically new feature of ES2015. The new class keyword is simply a constructor function in disguise. Meaning, its main purpose is to provide a more convenient syntax to create regular constructor functions.

The only difference between constructor-function.js and class.js is how the student is defined. In class.js, we are using a class declaration, instead of a let statement.

The body of a class begins and ends with curly brackets and within the body you can define methods and other members of your class including its constructor. The code inside the constructor block is executed when the class is called with the new keyword.

When we run this file in the console, the only difference to constructor-function.js is that it logs the student class before the properties but we can do more with the class.

When a student joins our class, it's good to assess up front the level of interest in the class. So I'm going to add a property to this student class called, interestLevel, the value being an integer between one and ten with a default value of five. The destructuring feature from ES2015 is a good pattern for assigning default values. See refactor.

Now, we need a way to add grades for the student. To do this, we add a new property called, grades and set a default value to a map object. Now we can add grades to a student and return an array instance from the student.grades map using the Array.from method.

###sub-classes

Extending classes can help keep your code modular and easy to reason about.

In the file sub-class.js, we add new properties and methods to the Student class by extending this Person class. The Person class takes three parameters (name, age, and eyeColor) and has a dance method with an array of different types of dances.

Normally, a named JavaScript function, like a constructor function, can appear at the bottom of a script and still be called by code that appears before it. That's known as hoisting, however, JavaScript classes aren't hoisted. This means you need to load code that defines the class before any code that calls the class.

Now, in this case, the Student class cannot be declared before the Person class, so to extend the Person class from the Student class, we need to add the 'extends' keyword along with a reference to the parent class Person. Then we need to change stevenJ from an instance of a Person to an instance of a Student. We also need to call the super function within the student's constructor before assigning values to the instance. Calling the super function means we are calling the constructor function on Person. When extending a class, you must be sure to call the super function in the child class constructor, before any reference to the instance.

When we extended the Person class, stevenJ inherited the dance method here but we want my Student class to have its own dance method. So I will add a dance method to the Student class and include a parameter to allow the student to perform a traditional dance.

Now traditional dances come from the Person class, so I need to call dance on super right inside the if statement. We'll say super.dance then return. So, now, if we call dance with traditional being true, stevenJ will perform a dance of the Person class. And if we call a dance with traditional being false, he'll perform a dance of the Student class.


###Static Methods

When declaring a method on a class we have two options instance or static.

A static method is one that exist on the class declaration and is not accessible through an instance. You can only call the function by referencing it's class. In the file static.js the bird class has a static method called change color and by default the color is set to red. Now the interpreter knows this is a static function because the line starts with the static keyword. 
