var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accueil' });
});
//router.get('/form', function(req, res, next) {
//  res.render('form', { title: 'Formulaire' });
//});
//router.get('/test', function(req, res, next) {
//  res.render('test', { title: 'Aide' });
//});
module.exports = router;
