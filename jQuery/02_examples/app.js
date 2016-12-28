
// Toggle location value on hover:
$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});


// Add a pet to the page using form:
$('#add-pet').on('click', function(){

  // Assign jQuery variables
  const $name = $('#pet-name');
  const $species = $('#pet-species');
  const $notes = $('#pet-notes');

  // Assemble the HTML of our new element with the above variables
  const $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() + '</p><p><strong>Species:</strong> ' + $species.val() + '</p><p><strong>Notes:</strong> ' + $notes.val() + '</p><span class="close">&times;</span></div></section>'
  )

  // .append()
  $('#posted-pets').append($newPet);

  // .parent() => Traverse the DOM

  $('.close').on('click', function() {
    $(this).parent().remove()
  })

  //reset form fields
  $name.val("");
  $species.val("Dog");
  $notes.val("");
});

// .hide() and .fadeIn()
$('img').hide().fadeIn(1600);

// .toggleClass()
$('.card').on('click', function() {
  $(this).toggleClass('selected');
})

// .remove() vs .empty() => Click on page and then inspect using dev tools

$('div').on('click', function() {
  $('#one').empty() // The div element still exists but is empty
  $('#two').remove() // This div element is completely removed from the markup
});
