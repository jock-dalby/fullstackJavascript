#jQuery XHR Object

The jQuery XHR object is an enhanced version of a regular XML HTTP request object and provides a bunch of extra properties that are useful for AJAX programming.

The jQuery XHR object contains some important information about the error. For example, you can retrieve the HTTP error code e.g. 404, that's a file not found error code.

The server also sends text, like not found, or internal server error, and that's stored in a property named statustext.

One thing to keep in mind about jQuery's fail method, it doesn't work for $.load method, and it doesn't work for remote AJAX requests that use JSONP that is request to a different web server. So if you're using AJAX to download tweets from Twitter or photos from Flickr, the fail method won't ever run. For those cases, you need to check the response in the normal success callback to see how the server responded. Errors do happen, so it's a good idea to plan for them. When the AJAX functionality isn't critical to the webpage, for example, you're using it just to display the current weather, it's fine to just let a bad AJAX request fail silently. But in cases where the AJAX request and response are important to the usability of the page, it's a good idea to use the fail method to let your site visitors know when there's a problem.
