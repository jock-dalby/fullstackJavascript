'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/^a-really/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('a-really') === 0); // indexOf

console.log(strToSearch.startsWith('a-really')); // startsWith

// // To run, go to relevant folder in command line and enter 'startsWith.js'

// All result true

// startsWith() takes a second parameter which is the index of where the search should start. Default is 0.

 console.log(strToSearch.startsWith('a-really', 5)); // false

 console.log(strToSearch.startsWith('lly', 5)); // true
