var express  = require('express');
var router   = express.Router();
var http = require('http');
var meteoService = require('../services/meteoService');
var pollutionService = require('../services/pollutionService');



//affiche la map avec tout les hotels
router.get('/', function(req, res, next) {
	var polServ = new pollutionService('test');
  console.log(polServ.fooBar());
  res.render('index', {title: 'Info sur le logement'});
});

module.exports = router;
