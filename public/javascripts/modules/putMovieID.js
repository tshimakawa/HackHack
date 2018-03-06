const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const Movie = require('../models/movie');

exports.putMovieID = function(movieID){
  return new Promise(function(resolve,reject){
    console.log("enter putMovieID");

    const movie = new Movie();
    movie.movieID = movieID;
    movie.save(function(err){
        if (error){
          reject(error);
        }
        else{
          resolve("success");
        }
    });
  });
}
