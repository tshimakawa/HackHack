const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const MainList = require('../models/mainlist');

exports.putMovieID = function(movieID){
  return new Promise(function(resolve,reject){
    console.log("enter putMovieID");
    const mainlist = new MainList();
    mainlist.movieID = movieID;
    mainlist.save(function(error){
        if (error){
          reject(error);
        }
        else{
          resolve("success");
        }
    });
  });
}
