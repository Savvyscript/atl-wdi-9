
var express = require('express');
var app     = express();
var port    = 3000;
var hbs     =  require('hbs');


app.get('/', function(req, res) {
    res.send("Welcome to Pizza Express!");
});

app.get('/topping/:type', function(req, res, next) {
    res.send(`${req.params.type} Pizza, Good choice!`);

});

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/order/:amount/:size', function(req, res, next) {

   res.send(` order for ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute! `);
});