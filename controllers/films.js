//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmsRouter = new express.Router();
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

// var film1 = new Film({
//   title: "The Big Lebowski",
//   actors: ["Jeff Briges", "John Goodman"]
// })
//
// var film2 = new Film({
//   title: "Fight Club",
//   actors: ["Edward Norton", "Meatloaf"]
// })

// var filmsArray = ["Indiana Jones and the last crusade", "Inception", "Catch me If you can"]

filmsRouter.get('/:id', function(req,res){
  res.send({data: films[req.params.id]});
})

filmsRouter.get('/', function(req,res){
  res.json({data: films});
})

filmsRouter.post('/', function(req,res){
  films.push(req.body.film);
  res.json({data: films});
})

filmsRouter.put('/:id', function(req,res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
})

filmsRouter.delete('/:id', function(req,res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})

module.exports = filmsRouter;
