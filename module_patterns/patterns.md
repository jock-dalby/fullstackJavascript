#Module Patterns


###Basic Module Pattern
```js
function foo() {
  console.log('foobar');
};

foo();
```

When dealing with large applications, the above foo variable, or the foo function is now accessible in the global namespace. This is sometimes referred to as cluttering the global namespace. The reason this is a problem is because so much is happening in the browser these days. You might load Angular, Bootstrap, and jQuery into the browser and if you have to navigate a bunch of variables that clutter the global namespace, it can be quite a nuisance. In fact, it could even be catastrophic if the variables you create share the same name as the variables from another library.

The most basic module pattern is going to solve this. To do this, just wrap the code in a self-executing anonymous function.

```js
(function() {
  function foo() {
    console.log('foobar');
  };

  foo();
}());
```

 By wrapping the function in closers, we can then call it. The reason we need to wrap the function in closers, is because the function itself without a name will return undefined. However, when we wrap the function parentheses, we're essentially saying treat this whole thing as an expression which is evaluated immediately and does not necessarily require naming or assignment. Now the global namespace is not cluttered with the foo variable and trying to access it in dev tools will return undefined.

 A cool little trick is to replace the closures with a plus sign or an exclamation point.

```js
+function() {
  function foo() {
    console.log('foobar');
  };

  foo();
}();

!function() {
  function foo() {
    console.log('foobar');
  };

  foo();
}();

```

 The reason you might want to do this, is if you're concatenating multiple files together. In the basic module pattern, you'd have to remember to end every module with a semicolon. It's much more elegant to simply add the exclamation point. There are a few other symbols used, but these are the two that are most common. And keep in mind that these are not just random features in JavaScript. They actually work for some very specific reasons. See below links:

```html
<a href="http://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function">Using the !, +, -, ~ sign before function</a>

< a href="https://github.com/airbnb/javascript/issues/44#issuecomment-13063933">Why use the ! sign, instead of the parenthesis in AirBnb’s style guide</a>
```

 Another thing we can do with our module pattern is import other globals to be used within the module but with the reference, locally within the module. Here I'm going to import a very popular JavaScript toolkit called underscore into our module. We're going to bring it in as a parameter. Down here. We're gonna give it a different name. Which is underscore spelled out. There are a couple benefits to this. The first is that renaming the variable makes it obvious that you are doing something different or special with this variable in your module. For instance, maybe you are going to extend underscore with some new methods. Additionally, there's also a slight performance benefit. This is because the variable is now referenced in the local scope. This means that when you call the variable, the interpreter does not have to crawl thru the global scope looking for it. See below how we have access to the new variable, by logging the version of underscore.

```js
!function(underscore) {
  underscore.awesomemethod = "AWESOME";
  console.log(underscore.VERSION); // returns 1.6.0
}(_);

// If we enter _.awesomemethod into dev tools we will get "AWESOME" return as we have assigned a new property to the existing library
```

  One of the benefits of importing variables is that JavaScript is typically compressed, and minified for use in production. Compressors cannot rename global variables, however, minifiers or compressors are able to rename global variables that have been invoked with the local reference, and that's just like we did with underscore. By importing it, and then using it locally.

```html
<a href="http://alistapart.com/article/javascript-minification-part-II">Minification</a>
```

  This module pattern is great if you want to keep your code from cluttering the global namespace. But what if you want to keep your code from cluttering the global namespace and you want to share information with different parts of your application? For this we have the module export pattern.

###Module Export Pattern

  ```js
const awesomeNewModule = (function () {
  const exports = {}
  exports.helloMars = function () {
    console.log("Hello Mars");
  };
  return exports;
}());
  ```

  Here we are I'm assigning the entire module to a variable called awesomeNewModule and then creating a local object called exports, which will serve as a container of sorts. Then we assign a method to exports called helloMars and return the entire exports object. In the browser, we now have access to awesomeNewModule along with the helloMars method.

```js
const awesomeNewModule = (function () {
  const exports = {
    foo: 5,
    bar: 10
  }
  exports.helloMars = function () {
    console.log("Hello Mars");
  };
  exports.goodbye = function () {
    console.log("Goodbye!");
  };
  return exports;
})();
```

  Now on the browser, I can see that I have access to all of the above values and methods via the awesomeNewModule (i.e. awesomeNewModule.foo(), awesomeNewModule.bar() or awesomeNewModule.goodbye()). Bar is equal to 10. Foo is 5. And then awesome module.goodbye gives us back the string we expect. To highlight the point here, we do not have access to any of these variables globally (i.e. foo(), bar() or goodbye()).

  Rarely, especially for large projects, are you going to have all of your code in one file. At first, it is easy enough to split your code into different files and then smash them together in a specific order. However, this quickly becomes unmanageable. Using another pattern called loose augmentation we can actually take advantage of JavaScript's asynchronous runtime environment.

###Loose Augmentation

   To implement this pattern, we will use the below very small piece of logic.

```js
const awesomeNewModule = (function (exports) {
  const exports = {
    foo: 5,
    bar: 10
  }
  exports.helloMars = function () {
    console.log("Hello Mars");
  };
  exports.goodbye = function () {
    console.log("Goodbye!");
  };
  return exports;
})(awesomeNewModule || {});

```

   Here we say, if awesomeNewModule exists, then import it, otherwise, awesomeNewModule, is simply an object. And then since we're using the export keyword, we say that awesomeNewModule is exports within the function. All the values will now either get assigned to an empty object if this was the first file, or, they'll get assigned and extend awesomeNewModule if this file was loaded after the module had already been created. One important thing to keep in mind, is that if awesomeNewModule already exists, make sure that none of these keys already exist on awesomeNewModule, otherwise they will overwrite any methods or values that were named the same in previous files. For this reason, you cannot share values across the modules. If any aspect of one module depends on another, then you can't safely depend on those values. The whole point of writing modular code is that you split your app into pieces that don't depend on each other so if one module introduces a breaking error to the application, it does not affect the rest of the code. Additionally, there are ways to add safeguards to make sure that one module doesn't override patterns or methods created from another module.

###Sub Module Pattern

   The sub module pattern is almost exactly the same as the module export pattern. It's the value of the sub module pattern is that you can namespace your application even further. Good module and sub module naming can structure your app into super logical and readable bits.

 ```js
 const awesomeNewModule.sub = (function (exports) {
   const exports = {
     foo: 5,
     bar: 10
   }
   exports.helloMars = function () {
     console.log("Hello Mars");
   };
   exports.goodbye = function () {
     console.log("Goodbye!");
   };
   return exports;
 })(awesomeNewModule.sub || {});

 ```

   Here we add the sub object to the main module we created and to maintain the module import aspect, simply add import awesomeNewModule.sub when calling the function, or create it as an empty object. Pretty simple. And now of course everything else we discussed about modules can be applied to sub modules. Let's quickly take a look at these patterns in the Twitter Bootstrap repo on GitHub.

```html
<a href="https://github.com/twbs/bootstrap/blob/master/js/modal.js">Twitter Bootstrap</a>
```

   If you open any of the JavaScript files you can see the module pattern at work, using the + symbol to declare an expression to be evaluated and at the end of the expression, a module import pattern at work with (jQuery).

   Another example project, airbnb's polyglot.js.

```html
<a href="https://github.com/airbnb/polygot.js/blob/master/lib/polygot.js">AirBnB's Polygot</a>
```

   Here you can see that they've invoked the module and turned the function into expression with exclamation point. Then they've evaluated the expression by passing in the this parameter (this). The 'this' parameter actually becomes 'root' in the local scope. Remember from the module import pattern that a reference to a parameter in the local scope can have some important performance benefits. It also allows you to rename the parameter you pass in but only in the local scope. So here, they're renaming 'this' to 'root'. This is logical based on the fact that the script is supposed to run on the back-end in Node.js or on the front-end in the browser. For exactly this reason, they do a quick test on line 282 to see whether the code is being used within Node or on the front-end.

```js
//Export for Node, attach to `window` for browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Polygot;
} else {
  root.Polygot = Polygot;
}
```

   Node has a module keyword in any context, and so there is a quick test to see if module exists or not. If it exists, then use Node's special exports method to export the module. Otherwise, we know that the code is being run on the front-end. So attach the polyglot module to the root object. And of course, in the browser, this is going to be the window. This is a pattern you will see all the time for code that can run in a browser or Node environment. So I thought I'd point it out.

   By following some of these powerful patterns, you're writing code that is conventional, and by following convention, you are making it easier for others to get involved. Writing code is a team sport and you want to make it easier for others to team up with you.
