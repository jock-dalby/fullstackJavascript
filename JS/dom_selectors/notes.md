The document is a global object (and property of the global window object) which represents the HTML and content of a webpage. The DOM is a representation of a webpage that JavaScript can use to select and change different parts of the webpage by interacting with the document.  The DOM is a live entity, so changes that JavaScript makes to the DOM alter the webpage.

Interactivity with JavaScript involves three basic actions:

- Selecting elements
- Manipulating elements
- Listening for user actions

Examples

Using the document object and the getElementById method to select the heading and change the color to purple

document.getElementById('myHeading').style.color = 'purple'

Change background to yellow:

document.getElementById('myHeading').style.background = 'yellow'
