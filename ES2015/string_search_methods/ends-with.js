'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/hyphenated-string$/.test(strToSearch)); // test string w/ regular expression

console.log(strToSearch.indexOf('hyphenated-string') === strToSearch.length - 'hyphenated-string'.length); // indexOf

console.log(strToSearch.endsWith('hyphenated-string')); // endsWith

// To run, go to relevant folder in command line and enter 'endsWith.js'

// All result true

// startsWith() takes a second parameter which is the maximum length of the searchable string. Default is 0.

console.log(strToSearch.endsWith('hyphenated-string', 21)); // ensWith() will only use the first 21 characters for the search and so return false

console.log(strToSearch.endsWith('hyphena', 21)); // true
