// Make heading turn red when clicked

const myHeading = document.getElementById("myHeading");

myHeading.addEventListener('click', () => myHeading.style.color = 'red');

// Make heading turn the specified colour when button is clicked

const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

// use getElementsByTagName to select a collection of elements

const myParagraph = document.getElementsByTagName('p')

console.log(myParagraph.length);
console.log(myParagraph[0]);

// Change all 'li' elements on the page to purple

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

// Change all elements with class 'error-not-purple' back to red

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
}

// document.querySelector() & document.querySelectorAll() are the most flexible selectors as these will acccept ids, classes, tag names and more.

console.log('Example 1', document.querySelectorAll('li')); // => returns all elements that match the selector
console.log('Example 2', document.querySelector('li')) // => Only returns the first elements that matches the selector

console.log('Example 3', document.querySelector('#myHeading')) // => Select an element by it's id

console.log('Example 4', document.querySelector('.error-not-purple')) // => Select a collection of HTML elements by their class names.

console.log('Example 5', document.querySelector('[title=label]')) // => Select an element by attribute, in this case if the title attribute = label.


// Get a collection of HTML elements with the class 'odds_and_evens' and then use the 'nth-child' pseudo-selector to change every second one to 'green'.

const evens = document.querySelectorAll('.odds_and_evens:nth-child(even)');

for (let i = 0; i < evens.length; i++) {
  evens[i].style.color = 'green';
}

// Select all the links in the nav

let navigationLinks = document.querySelectorAll('nav a');

console.log('Example 6', navigationLinks);

// select all links in the unordered list with the id of "gallery" and assign them to galleryLinks.

let galleryLinks = document.querySelectorAll('#gallery a');

// Select all images in the footer element and assign them to footerImages.

let footerImages = document.querySelectorAll('footer img');
