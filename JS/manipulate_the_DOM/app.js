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

// window.setTimeout

// It is useful to be able to pass one function into another as it allows us to have more control over when and how a function gets executed?

// The window.setTimeout function requires a function as first argument, the second arguemnt is the number of milliseconds we want to delay the callback firing the function and then any more arguments are the arguments neeed for the function.

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Aloha, everybody');

// This hands over control of an action over to another function to be triggered in response to an event. In this case, the event was those three seconds passed but we can also set callback functions to trigger when other events take place.

// addEventListener => VERY IMPORTANT INFO

// addEventListener takes an event type and a callback function. This callback function is often called an event handler because its purpose is to handle events. When addEventListener runs, it registers a handler on the event target, setting the target up to fire the handler any time that event takes place.

const listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('mouseover', (e) => {
    e.target.textContent = e.target.textContent.toUpperCase();
  })
  listItems[i].addEventListener('mouseout', (e) => {
    e.target.textContent = e.target.textContent.toLowerCase();
  })
};

// The problem with the above solution is that if we remove the last item from the list, plums, and then add it back, it will no longer change case when we hover over it. This is because we removed the element after we attached the behavior to it, and the new element doesn't have that event listener.

// To solve this we can move the event handler to  one of the ancestor element and have them pass it down to the li elements.

const secondList = document.querySelector('#list2');

secondList.addEventListener('mouseover', (event) => {
  if(event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

secondList.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});
