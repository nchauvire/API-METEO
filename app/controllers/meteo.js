var express  = require('express');
var router   = express.Router();

//affiche la map avec tout les hotels
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Info sur le logement'});
});

module.exports = router;
