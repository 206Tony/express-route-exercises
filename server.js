var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

app.get('/parent', function(req, res) {
  res.send("You've reached the parent!");
});

app.get('/parent/daughter', function(req, res) {
  res.send("You've reached the daughter!");
});

app.get('/parent/son', function(req, res) {
  res.send("You've reached the son!");
});

app.get('/hello/sei', function(req, res) {
  res.send("Welcome to SEI");
});

app.get('/hello/:name', function(req, res) {
  res.send("Hello " +req.params.name);
});

app.get('/:name/:thing', function(req, res) {
  res.send(req.params.thing + ' ' + req.params.name);
});



// Add a route that responds to the URL /console that takes a query string. Inside your route function, 
// simply have it console log that query string. Where is the console in a Node/Express app? Check to make sure the 
// key-value pairs printed. When you are done, at the end of the function, just respond with "done". 
// (Is your wildcard route messing things up? Might need to move more specific things above less specific things.)

app.get('/console', function(req, res) {
  console.log(req.query);
  res.send('done');
});

app.get('/color', function(req, res) {
  var colorString = req.query.color;
//  res.send("<h1 style=\"color: " + colorString + ";\">COLOR</h1>");
  res.send(`<h1 style="color: ${colorString};">COLOR</h1>`);
});

//Add a route that uses the wildcard /* to take at least 6 strings separated by forward slashes. You should store them in an array, 
//change every even-indexed word in the array to uppercase, join them into a string, and respond with that string.

app.get('/*', function(req, res) {
  let printouts = req.params[0].split('/');
  var evens = printouts.map( function(x, i) {
    if (i % 2 === 0) {
      return x.toUpperCase();
    } else {
      return x;
    }
  })
  res.send(evens.join(' '));
});

// Add your routes above this line
app.listen(8000);
