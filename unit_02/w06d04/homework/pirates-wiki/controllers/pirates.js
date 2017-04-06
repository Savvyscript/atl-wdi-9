
//your code below
var express  = require('express');
var pirates  = require('../models/pirates.js');
var router   = express.router();
var hbs      = 

router.get('/' function(req, res) {
         res.render('/index.hbs, pirates' {
         
   });    
// });

// router.get('/new' function(req, res) {
//            res.render('new')
// });

// router.post('/' function(req, res) {
//       var newPirate = {
//           name: req.body.name,
//           birthplace: req.body.birthplace,
//           death_year: req.body.death_year,
//           base: req.body.base
//           nickname: req.body.nickname
//       };
//       pirates.push(newPirate)
//       res.redirect('/pirates');

//       });

// // var pirateController = require('./controllers/pirates.js');
// // app.use("/pirates", pirateController);

//     router.get('/:id', function(req,res) {
//     var pirateInfo = pirates[req.params.id];
//     res.render('show', {
//       pirate: pirateInfo
//     });
  });
module.exports = router:
