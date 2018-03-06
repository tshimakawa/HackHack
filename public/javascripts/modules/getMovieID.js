const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const Movie = require('../models/movie');

exports.getMovieID = function(){
  return new Promise(function(resolve,reject){
    console.log("enter getMovieID");
    Movie.find({},function(error,result){
      if(error){
        console.log(error);
        reject(error);
      }else{
        console.log(result);
        resolve(result[0].movieID);
      }
    });
  });
}
