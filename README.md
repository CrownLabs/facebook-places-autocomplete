# Facebook Places API Autocomplete

A combination of the Facebook Places Search API, Twitter Bootstrap 3, and Twitter’s typeahead.js library

To use this tool, replace `{fb_app_access_token}` inside the js/index.js with your own Facebook app access token. Do not expose your application access token on the client side. Normally graph calls made with application tokens are made from the server, so do not use this in production.

If you want to use this implementation, change the `url` field in js/index.js to an API endpoint that will then make a call to Facebook’s Graph and at which point, you can return the data back to the client side.

To use, simply open `index.html` and search for a location. 
