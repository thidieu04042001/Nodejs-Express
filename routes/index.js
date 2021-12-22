var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'My website - Users' });
});

router.get('/users/cool', function(req, res, next) {
  res.render('myselt', { title: 'MYSELF' });
});

module.exports = router;
