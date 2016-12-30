$(document).ready(function () {

  $('button').click(function () { 

    // Handle selected class on pressed button
    $('button').removeClass("selected"); names
    $(this).addClass("selected");

    // Define variables for AJAX request
    const flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    const flickrOptions = {
      tags: $(this).text(), // check flickr docs for how requests are made, in this case 'tags'.
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
    };

    // Make AJAX request
    $.getJSON(flickerAPI, flickrOptions, displayPhotos); // url, data, callback

  }); // end click

}); // end ready
