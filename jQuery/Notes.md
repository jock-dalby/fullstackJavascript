This folder does not contain images or css files but should be able to understand the jQuery used through HTML and app.js

CDN => Content Delivery Network

jQuery Element Selectors

$('li')
$('a')
$('img')
$('p') etc etc.

These will grab all instances of the particular element we pass in. If we do not want to grab them all we can use descendant selectors to be more specific

$('p a') => All links that are inside paragraph elements.

We can also use classes & ids

$('.main-heading')
$('#list')

and attribute selectors

$([name='newsletter']);
