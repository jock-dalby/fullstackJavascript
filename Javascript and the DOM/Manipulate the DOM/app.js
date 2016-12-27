// .textContent

let myHeading = document.querySelector('h1');

console.log(myHeading.textContent); // returns JavaScript and the DOM

// re-assign the value of myHeading

myHeading.textContent = "Jock and the DOM";
console.log(myHeading.textContent); // returns Jock and the DOM

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description'); // Because more than 1 'p' on the page, we use the class 'description' to select the one we want.
const descriptionButton = document.querySelector('button.description');

descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + ':';
  descriptionInput.value = "";
});

// .innerHTML

const ul = document.querySelector('ul');

descriptionButton.addEventListener('click', () => {
  ul.innerHTML = '<li>This</li><li>is</li><li>a</li><li>new</li><li>list.</li>';
});

// .attribute

console.log(descriptionInput.type) // returns "text"
console.log(descriptionInput.className) // returns "description"

    // descriptionInput.type = "checkbox" would update the type attribute to checkbox;

descriptionP.title = "List description"; // updates title of descriptionP and displays a tooltip when hovered over with corresponding value.

// .style => The stlye property is an OBJECT

console.log(descriptionP.style) // => prints a list of all the available style names. The values printed only include inline stlyes and will not include any styling from external style sheets.

descriptionP.style.color = "darkblue"
descriptionP.style.backgroundColor = "lightblue";

const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');

// Toggle list display and button text using style

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = "Hide List";
    listDiv.style.display = "block";
  } else {
  toggleList.textContent = "Show List";
    listDiv.style.display = "none";
  }
})

// .createElement & .appendChild

const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});

// .removeChild()

const removeItemButton = document.querySelector('.removeItemButton');

removeItemButton.addEventListener('click', () => {
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
