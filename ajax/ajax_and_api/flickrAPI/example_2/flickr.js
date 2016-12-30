$(document).ready(function () {

  $('form').submit(function (e) {
    e.preventDefault();

    // Define HTML variables
    const $searchField = $('#search');
    const $submitButton = $('#submit');

    // Define variables for AJAX request
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const flickrOptions = {
      tags: $searchField.val(), // check flickr docs for how requests are made, in this case 'tags'.
      format: 'json'
    }
    const displayPhotos = function (data) {
      let statusHTML = '<ul>'
      console.log(data.items)
      data.items.forEach(function(photo) {
        statusHTML += '<li class="grid-25 tablet-grid-50">';
        statusHTML += '<a href="' + photo.link + '" class="image">';
        statusHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      statusHTML += '</ul>';
      $('#photos').html(statusHTML);

      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
    };

    // Make AJAX request
    $.getJSON(flickerAPI, flickrOptions, displayPhotos); // url, data, callback

    // Change form to tell user search in progress
    $searchField.prop("disabled", true).val("");
    $submitButton.attr("disabled", true).val("searching...");
  }); // end click

}); // end ready
