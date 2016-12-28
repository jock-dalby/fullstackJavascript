Examples

1. Get the value of the text input element, and store it in a variable linkName

```js
let linkName = document.querySelector('#linkName').value;
```

Set the text content of the a tag to be the value stored in the variable linkName.
```js
document.querySelector('a').textContent = linkName;
```

2. Set the class of panel to the newParagraph and append to contentDiv.

```js
const contentDiv = document.getElementById("content");
let newParagraph = document.createElement('p');
newParagraph.className = 'panel';
contentDiv.appendChild(newParagraph);
```

3. Select the first list item element and store it in the variable firstListItem

```js
let myList = document.querySelector('ul');
let firstListItem = document.querySelector('#first');
```
Remove the list item element stored in firstListItem from the DOM.
```js
myList.removeChild(firstListItem);
```
4. In the listener that has been added to the section element, ensure that the text input elements are the only children that trigger the background-changing behavior.

```js
let section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  if(e.target.tagName == 'INPUT') {
      e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});
```
