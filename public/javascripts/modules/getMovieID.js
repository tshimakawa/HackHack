const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const MainList = require('../models/mainlist');
const SubList = require('../models/sublist');

exports.getMovieID = function(){
  return new Promise(function(resolve,reject){
    console.log("enter getMovieID");
    MainList.find({},function(error,mainlist_result){
      if(error){
        reject(error);
      }else if(mainlist_result.length == 0){//playlistが空のとき
        SubList.find({},function(error,sublist_result){
          if(error){
            reject(error);
          }else{
            const result = {
              list:'sublist',
              movieInfo:sublist_result[Math.floor(Math.random()*sublist_result.length)]
            };
            resolve(result);
          }
        });
      }else{//playlistに曲が登録されている時
        const result = {
          list:'mainlist',
          movieInfo:mainlist_result[0]
        };
        resolve(result);
      }
    });
  });
}
