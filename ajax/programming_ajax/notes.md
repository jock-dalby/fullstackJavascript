#Programming AJAX

###JSON

JSON stands for JavaScript Object Notation. It's a way to use JavaScript to pass information around. It uses basic JavaScript arrays and objects to store data.
There are two different ways you can format JSON, using an array notation or object notation and it's common to combine both.

In regular JavaScript objects keys don't have to be quoted, however, valid JSON requires not only quotes around the property name, but they must also be double quotes. Single quotes won't work. Strings also require double quotes.

With Ajax the browser sends out a request to
the web server and the web server sends a response. The response is just plain text, even though the server
sends back information that looks like HTML, XML, or Json.
To a web browser those responses are just a string of characters, in other words, even though Json is formated to look like JavaScript, it isn't JavaScript, It's a plain text string, just a bunch of letters, numbers, and punctuation marks with no magical significance to your web browser. In order to use Json data, we need to take the string and convert it into JavaScript. This is a process known as parsing.
