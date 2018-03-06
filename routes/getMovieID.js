const express = require('express');
const router = express.Router();
const modules = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  modules.getMovieID.getMovieID().then(
    function(result){
      //result={_id,movieID} _idがないとremoveMovieID関数でMainListから動画が削除できない
      let response = {
        movieID:result.movieInfo.movieID
      }
      res.send(JSON.stringify(response));
      //mainlistから曲を取り出した場合
      if(result.list == 'mainlist') modules.removeMovieID.removeMovieID(result.movieInfo);
    },function(error){
      console.log(error);
    }
  );
});

module.exports = router;
