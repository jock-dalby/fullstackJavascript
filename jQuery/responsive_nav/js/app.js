// Problem: Nav bar not suitable for smaller browser widths and small devices
// Solution: To hide the text links & swap out for a mobile nav

// Create a select jQuery object
const $select = $('<select></select>');

// Cycle over menu links - Create an option for each with href as value and text as text.
$('#menu a').each(function() {
  const $option = $('<option></option>');

  const link = $(this).attr('href');
  $option.attr('value', link);

  const text = $(this).text();
  $option.text(text);

  if ($(this).parent().hasClass('selected')) {
    $option.prop('selected', true);
  }

  $select.append($option);

})

// Append select to #menu
$('#menu').append($select);

// Bind change listener to select
$select.on('change', function() {
  window.location = $select.val();
})
