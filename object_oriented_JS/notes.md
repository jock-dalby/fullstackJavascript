

An object is a container for values in the form of properties (in key/value pairs) and functionality in the form of methods(which may or may not return a value).

```js
const h1 = document.getElementById("header");
console.log(h1.innerHTML);
h1.innerHTMl = "Javascript is awesome!"
```

Abo 'getElementById()' is a 'METHOD' on the 'document' object and is returning a value.
- 'log()' is a METHOD on the 'console' object and 'innerHTML' is a METHOD of 'h1' HTML element and is getting a value.
- 'innerHTML' is a METHOD of 'h1' HTML element and is assigning a value.

###Native objects

Native objects are native to JavaScript, no matter where your JavaScript programs are run, it will have these objects. Some examples of these native object are number, string,
array, Boolean, object etc.

###Host Objects

Host objects are provided by the host environment where the JavaScript program is running e.g. the browser. The browser has hundreds of different host objects e.g. document, console, window etc.

###Own Objects

Any objects we create in our programming to handle state and functionality of application.


##Constructor Functions

A constructor function:
- Describes how an object should be created.
- Creates similar objects.
- Each object created is an instance of that object type.

```js
function Contact(name, email) {
  // this = {} a new object
  this.name = name;
  this.email = email;
  this.sendEmail = function () {
    //Enter method details here
  }
  return this; // return statements are optional for constructor functions
}

const contact = new Contact("Jock", "jockdalby86@gmail.com");
```

##Methods with Prototypes5:09
 
