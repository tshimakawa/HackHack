const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const PlayList = require('../models/playlist');
const playlist = new PlayList();

exports.putMovieID = function(movieID){
  return new Promise(function(resolve,reject){
    console.log("enter putMovieID");

    playlist.movieID = movieID;
    playlist.save(function(error){
        if (error){
          reject(error);
        }
        else{
          resolve("success");
        }
    });
  });
}
