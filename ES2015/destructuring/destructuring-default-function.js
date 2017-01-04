'use strict';

function getData({ url, method = 'post' } = {}, callback) {
  callback(url, method);
}

getData({ url: 'myposturl.com' }, function (url, method) {
  console.log(url, method);
}); // returns myposturl.com post

getData({ url: 'myputurl.com', method: 'put' }, function (url, method) {
 console.log(url, method);
}); // returns myputurl.com put

/*

Here the getData function takes two parameters, the first parameter is an object which has two properties URL and method. Now, the value for URL can be null or undefined. Method, however, will assume the value of post if it's not explicitly defined when getData is called.

In the first function call, we give URL the value myposturl.com. And we do not define a value for method, so it returns the default value of post. Now in the second function call, the URL and method have properties defined so the console returns myputurl.com and put. 

*/
