Examples

1. Remove the removeMe element from the parent element.

```js
const removeMe = document.querySelector('.remove_me');
let parent = removeMe.parentNode;
parent.removeChild(removeMe)
```

2. A delegated click event listener has been attached to the selected ul element, which is stored in the variable list. The handler is targeting each button in the list. When any one of the buttons is clicked, a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element.

```js
const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    e.target.previousElementSibling.className = 'highlight';
  }
});
```
