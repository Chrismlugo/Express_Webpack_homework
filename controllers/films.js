//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmsRouter = new express.Router();
var films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var filmsArray = ["Indiana Jones and the last crusade", "Inception", "Catch me If you can"]

filmsRouter.get('/:id', function(req,res){
  res.json({data: filmsArray[req.params.id]});
})

filmsRouter.get('/', function(req,res){
  res.json({data: filmsArray});
})

filmsRouter.post('/', function(req,res){
  filmsArray.push(req.body.film);
  res.json({data: filmsArray});
})

filmsRouter.put('/:id', function(req,res){
  filmsArray[req.params.id] = req.body.film;
  res.json({data: filmsArray});
})

filmsRouter.delete('/:id', function(req,res){
  filmsArray.splice(req.params.id, 1);
  res.json({data: filmsArray});
})

module.exports = filmsRouter;
