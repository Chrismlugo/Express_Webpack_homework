var express = require('express');
var router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req,res){
  res.json({data: "Welcome to films!"});
})

module.exports = router;
