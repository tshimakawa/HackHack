const express = require('express');
const router = express.Router();
const modules = require('../public/javascripts/modules');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const response = {};
	res.send(JSON.stringify(response));
});

module.exports = router;
