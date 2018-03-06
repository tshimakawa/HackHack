const express = require('express');
const router = express.Router();
const modules = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  modules.getMovieID.getMovieID().then(
    function(movieID){
      let response = {
        movieID:movieID
      }
      res.send(JSON.stringify(response));
    },function(error){
      console.log(error);
    }
  );
});

module.exports = router;
