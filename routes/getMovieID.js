const express = require('express');
const mongoDB = require('mongoose');
const router = express.Router();
const modules = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  const movieID = modules.getMovieID.getMovieID();//MovieIDを取得
  let response = {
    movieID:movieID
  }
  res.send(JSON.stringify(response));
});

module.exports = router;
