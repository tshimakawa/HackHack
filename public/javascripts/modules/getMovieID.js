const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const Movie = require('../schema/movie');

exports.getMovieID = function(){
  return new Promise(function(resolve,reject){
    console.log("enter getMovieID");
    Movie.find({'movieID':'BkOVkthMkOc'},function(error,result){
      if(error){
        console.log(error);
        reject(error);
      }else{
        console.log(result);
        resolve("qag4ewos4TE");
      }
      console.log("aaaaaaaaaaaaa");
    });
  });
}
