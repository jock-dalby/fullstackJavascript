// Traversal is similar to selection because you're obtaining a reference to an element. You'll often have times when you already have a reference to one element and you need to get ahold of another element nearby. This is called DOM Traversal. Traversal is just a way to move from one part of the DOM to another and select an element based on its relationship to another element.

// .parentNode, .previousElementSibling, .nextElementSibling & .insertBefore()

const listUl = document.querySelectorAll('.list');

for (let x = 0; x < listUl.length; x++) {
  const ul = listUl[x];
  ul.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      if (event.target.className == 'remove') {
        ul.removeChild(li);
      }
      if (event.target.className == 'up') {
        let previousLI = li.previousElementSibling;
        // Stop the 1st element being moved to the last when 'up' is pressed, as is default by .insertbefore()
        if (previousLI) {
          ul.insertBefore(li, previousLI);
        }
      }
      if (event.target.className == 'down') {
        let nextLI = li.nextElementSibling;
        // Stop the 1st element being moved to the last when 'up' is pressed, as is default by .insertbefore()
        if (nextLI) {
          ul.insertBefore(nextLI, li);
        }
      }
    }
  });

// .createElement & .appendChild

  const addItemInput = document.querySelector('.addItemInput');
  const addItemButton = document.querySelector('.addItemButton');

  addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = "";
  });

  function attachListItemButtons (li) {
    let up = document.createElement('button')
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
    let down = document.createElement('button')
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
    let remove = document.createElement('button')
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
  }

  // .children

  const lis = ul.children

  for (let i = 0; i < lis.length; i++) {
    attachListItemButtons(lis[i]);
  }

  // .firstElementChild & .lastElementChild

  const firstListItem = ul.firstElementChild;
  const lastListItem  = ul.lastElementChild

  firstListItem.style.background = 'lightskyblue';
  lastListItem.style.background = 'lightsteelblue';
}
