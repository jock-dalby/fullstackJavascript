// Problem: User when clicking on image goes to a dead end = Poor user experience
// Solution: Create an overlay with the large image known as a lightbox

const $overlay = $('<div id="overlay"></div>'); // This value is a jQuery object
const $image = $('<img>');
const $caption = $('<p></p>');

$overlay.append($image);
// Caption will be appended to the overlay AFTER the image
$overlay.append($caption);

$('body').append($overlay); // Reduce markup in html file that isn't required if JS isn't activated in browser.

$('#imageGallery a').on('click', function(event){
  event.preventDefault();
  const imageURL = $(this).attr('href');
  $image.attr('src', imageURL);
  const content = $(this).children('img').attr('alt');
  $caption.text(content);
  $overlay.show();
});

$('#overlay').on('click', function() {
  $overlay.hide();
})
  
