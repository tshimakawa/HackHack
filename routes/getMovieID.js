const express = require('express');
const mongoDB = require('mongoose');
const router = express.Router();
const modules = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  modules.getMovieID.getMovieID().then(
    function(movieID){
      let response = {
        movieID:movieID
      }
      res.send(JSON.stringify(response));
      console.log("------------------");
    },function(error){
      console.log(error);
    }
  );
});

module.exports = router;
