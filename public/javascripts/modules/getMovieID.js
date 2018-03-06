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
        const sublist = new SubList();
        sublist.find({},function(error,sublist_result){
          if(error){
            reject(error);
          }else{
            resolve(sublist_result[Math.floor(Math.random()*sublist_result.length)].movieID);
          }
        });
      }else{//playlistに曲が登録されている時
        resolve(mainlist_result[0].movieID);
      }
    });
  });
}
