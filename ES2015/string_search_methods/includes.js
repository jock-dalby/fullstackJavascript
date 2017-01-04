'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/long/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('long') > -1); // indexOf

console.log(strToSearch.includes('long')); // includes

// To run, go to relevant folder in command line and enter 'includes.js'

// All result true

// includes () takes a second parameter which is the index of where the search should start. Default is 0.

console.log(strToSearch.includes('long', 13)); // false
