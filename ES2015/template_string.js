'use strict';

const student = { name: 'James', followerCount: 34 };

let tableHtml = `
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Followers</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${student.name}</td>
        <td>${student.followerCount}</td>
      </tr>
    </tbody>
  </table>`;

console.log(tableHtml);

// To run, go to relevant folder in command line and enter 'node extreme-template-string.js'


// Can also do sums:

console.log(`My Favorite Number is ${4 + 6}!`);
