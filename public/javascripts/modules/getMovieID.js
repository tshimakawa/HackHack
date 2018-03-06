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

        const sublist = new SubList();
        sublist.find({movieID:mainlist_result[0].movieID},function(error,sublist_result){

          console.log("入ってる");

          if(error) throw error;
          else if(sublist_result.length == 0){
            sublist.movieID = mainlist_result[0].movieID;
            sublist.save(function(error){
              if(error) throw error;
              else{
                console.log("SubListへの登録完了");
              }
            });
          }else{
            console.log("すでにSubListへ登録されてます");
          }

        });
        MainList.remove({_id:mainlist_result[0]._id},function(error){
          if(error) throw error;
        });
      }
    });
  });
}
