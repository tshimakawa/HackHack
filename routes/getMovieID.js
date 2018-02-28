const mongoDB = require('mongoose');
const modules = require('../public/javascripts/modules');

routes.get('/', function(req, res, next) {
  const movieID = modules.getMovieID.getMovieID();//MovieIDを取得
  let response = {
    movieID:movieID
  }
  res.send(JSON.stringify(response));
});
