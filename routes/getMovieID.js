const express = require('express');
const router = express.Router();
const modules = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  modules.getMovieID.getMovieID().then(
    function(result){
      //result={_id,movieID} _idがないとremoveMovieID関数でMainListから動画が削除できない
      let response = {
        movieID:result.movieID
      }
      res.send(JSON.stringify(response));
      // modules.removeMovieID.removeMovieID(result);
    },function(error){
      console.log(error);
    }
  );
});

module.exports = router;
