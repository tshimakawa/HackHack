const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const PlayList = require('../models/playlist');

exports.putMovieID = function(movieID){
  return new Promise(function(resolve,reject){
    console.log("enter putMovieID");
    const playlist = new PlayList();
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
