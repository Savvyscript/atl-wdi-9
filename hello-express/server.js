var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server


app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
       res.send('Hello Friend');
      
});
app.get('/greeting', function(req, res) { // when a request comes in at localhost:3000/ it will respond
       res.send('HEY, WDI 9!');

});

app.get('/rihanna', function(req, res) { // when a request comes in at localhost:3000/ it will respond
       res.send("Work work work work work");
  });  

 app.get('/:name', function(req, res){ // when a request comes in at localhost:3000/ it will respond
     console.log(req.params);  
     console.log(req.route); 
     console.log(req.query); 
     res.send(`Hello, $(req.params.name}! My name is ${req.query.first_name} ${req.query.last_name}.`);
});

app.get('/:my_favorite_food', function(req, res) { // when a request comes in at localhost:3000/ it will respond
     console.log(req.params);
       res.send(`is_curry_chicken, ${req.params.My_favorite_food}!`);
 }); 


app.get('/sightings', function(req, res){
  console.log(req.route); //just to checkout the server logs
  console.log(req.query); //just to checkout the server logs
  res.send(`How many ufo sightings you think there are in that ${req.query.state}? ${req.query.sights}.`);
});


app.get('/bigfoot', function(req, res){
  console.log(req.route); //just to checkout the server logs
  console.log(req.query); //just to checkout the server logs
  if (req.query.blurry == "true") {
    res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside! Run! He's fuzzy! Get out of there!");
  } 
  else {
    res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
  }
});

app.get('/favorite/:noun', function(req, res){
    console.log(req.params);
    if (req.query[req.params.noun]) {
        res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
    }
    else {
        res.send(`I have a favorite ${req.params.noun}!`);
    }
});

var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above


var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server


app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
});

var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above
