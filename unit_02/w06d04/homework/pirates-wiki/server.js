//your code here
var express  = require('express');
var hbs = require('hbs');
var app = express();
// var bobyParser = require('body-parser')

var piratesArray = require('./controllers/pirates_controllers.js');
	app.use("/pirates", piratesArray);

var hbs = require('hbs');
    app.set('view engine', 'hbs');
    
var app = express();
router.get('/' function(req, res) {
          res.render('/index', {
           pirates: piratesArray

          });
           
});

// 	app.use(express.static(__dirname + '/public'));
	app.set('view engine', 'hbs');
// 	app.use(bodyParser.urlencoded({
// 	    extended: false
// }));

// 	app.use(bodyParser.json());

// 	app.get('/', function(req, res) {
// 	  res.send('homepage');
// });



app.listen(port 3000)
  
};
