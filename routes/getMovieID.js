const mongoDB = require('mongoose');
const module = require('../public/javascripts/modules');

router.get('/', function(req, res, next) {
  const movieID = module.getMovieID.getMovieID();//MovieIDを取得
  let response = {
    movieID:movieID
  }
  res.send(JSON.stringify(response));
});
