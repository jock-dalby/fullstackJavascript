// ES 2015 provides a shorter syntax for defining property keys and objects. When the interpreter encounters a variable assignment without a property key, the variable name itself is used as the property key.

'use strict';

function submit(name, comments, rating = 5) {
  let data = { name, comments, rating };

  for (let key in data) {
    console.log(key + ':', data[key]);
  }
  // … do ajax request
}

submit('English', 'Great course!', 9) // returns {name: 'English', comments: 'Great course!', rating: 9}
