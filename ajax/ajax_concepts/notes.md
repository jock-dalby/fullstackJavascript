#AJAX Concepts

###AJAX - Asynchronous Javascript And XML

AJAX lets you update HTML without loading a new webpage.

Technically AJAX is called a XML HTTP Request Object which is shortened to just XHR.

With AJAX use JavaScript to prepare a request, send it, and process the response.

You can break the AJAX programming process into four steps:

1. First, create an XMLHTTP Request object. This step tells the web browser to get ready. You want to send an AJAX request and the web browser needs to create
an object that has all the methods you'll need to send and receive data.

2. Define a callback function. This is the programming you want to run when the server returns its response.
The callback is where you process the returned
data and update the HTML on the page.

3. Open a request. In this step, you give the browser two
pieces of information, the method the browser will use
to send the request, usually either get or post, and the URL where the request is sent.

4. Send the request. The previous three steps gave the web browser all the information it needs so we can finally send off the request to the web server.

###XML - Extensible Markup Language

XML is very similar to HTML, and like HTML, XML uses tags to structure data. For example, say you wanted to store a list of contacts with names and phone numbers. You could start with a tag named contacts. Inside that tag, you could add individual contacts using another tag called contact. In HTML, we have tags like head, title, body, div, and ul, but XML doesn't limit you to just a handful of tags. You can create your own tags.

```html
<contacts>
  <contact>
    <name>Andrew</name>
    <phone>123-456-789</phone>
  </contact>
  <contact>
    <name>Jock</name>
    <phone>187-654-329</phone>
  </contact>
</contacts>
```

The benefit of a structured format like XML is that the data is clearly and consistently organized, making it easy for a computer to split the data up into usable chunks. The process of breaking a file up into easily accessed parts is called parsing. XML is a very common format for exchanging data between computers. Most server-side languages handle XML easily.

However, using XML data with JavaScript isn't so easy. It involves several steps, including analyzing or parsing the XML document, then going through each of its nodes to extract data from the tags. For many AJAX applications, there's a better, more JavaScript-like data format called JSON. JSON has ow become the most popular way to exchange data using AJAX.

###AJAX Security Limitations

There are limitations to how you can use Ajax. Ajax is normally limited by a web browser's same origin policy which controls how JavaScript can access content from a web server.

In general, you can use Ajax to communicate from one page to another on the same web server but not to access other web servers. For example, say you have Ajax code on a page located at www.myserver.com. You can use Ajax to talk to a PHP file on that server. You can also talk to files on the same server within subfolders.

However, you'll run into problems in the following cases:

1. requesting data from another website if it's not from the same server, then it's not from the same origin, and it's forbidden.

2. Switching protocols, if you try to make an AJAX request to HTTPS myserver.com, the browser won't allow it. Switching from HTTP to HTTPS isn't allowed.

3. Switching port numbers. A browser can't let you request data from another port like port 8888, switching from the default port of 80 to port 8888 is a no no.

4. Switching hosts, an Ajax request located at www.myserver.com can't talk to db.myserver.com. Even though the two share the same domain, myserver.com, they're different hosts WWW and DB. This limitation shouldn't cause you any trouble when you simply want to make your web pages feel more responsive and load new information from your own site. But if you want to embed a Google map, your tweets or photos from Flickr All of those assets are in different domains than your own.

Fortunately, there are a few ways to circumvent the same origin policy. First, you can create a Web Proxy. Web servers aren't limited by the same origin policy, so a web server can request data from servers at other domains. Because of this, you can set up a script in PHP, or using Ruby on Rails on your server, which asks for information from another web server. Then you can use ajax to talk to the script on your site, which talks to the other site, and returns the data to your page. This makes sure the ajax part stays within the same website, and obeys the same origin policy.

Another common technique uses something called JSONP, which stands for JSON with Padding. It's not traditional AJAX. It actually relies on the ability to link to JavaScript files across domains. Browsers actually do allow many types of cross domain links. For example, you can link to photos on other websites, you can link to CSS files on other websites, and you could load JavaScript files from other sites. In fact, linking to JavaScript files across domains is a common technique when working with popular JavaScript libraries like jQuery. In fact, this is how CDNs, or Content Delivery Networks, work. A CDN hosts files that other sites can use. Google, for example, hosts many different javascript libraries, like the popular jQuery library. You can link to Google's CDN to download jQuery instead of putting the jQuery javascript file on your own server, which would waste disk space and your server's processing power. JSONP relies on this feature. Instead of actually using AJAX to contact another web server, you load a JavaScript file from the other site. This is perfectly okay with a web browser. That JavaScript file contains the information you're after. There are few techniques for using JSONP. And as you'll see, jQuery provides a really easy way to use JSONP. And we'll see it in action later in this course.

Finally, there's a new method for making AJAX requests across domains, it's called CORS or Cross-Origin Resource Sharing. It's a W3C recommendation and is already implemented in most current browsers. It does require some set up on the servers part. But allows the server to accept requests from other domains. It even allows for more complex types of authentication that require the web browser to supply credentials before the web server will provide any information.

There's one last Ajax limitation you need to keep in mind. Ajax doesn't work unless you're viewing your page through a web server. For example, if you build a webpage on your computer that uses Ajax and open that page right up in your web browser the Ajax won't work. You'll end up getting an error each time you make an Ajax request. However, if you set up a local development environment using something like MAMP for Mac or WAMP for Windows, you'll be okay as long as you view your AJAX-enabled pages through that web server.
