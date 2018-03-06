const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const PlayList = require('../models/playlist');
const subPlayList = require('../models/subplaylist');

exports.getMovieID = function(){
  return new Promise(function(resolve,reject){
    console.log("enter getMovieID");
    PlayList.find({},function(error,result){
      if(error){
        reject(error);
      }else if(result.length == 0){//playlistが空のとき
        const subplaylist = new subPlayList();
        subplaylist.find({},function(error,result){
          if(error){
            reject(error);
          }else{
            resolve(result[Math.floor(Math.random()*result.length)].movieID);
          }
        });
      }else{//playlistに曲が登録されている時
        resolve(result[0].movieID);

        subPlayList.find({movieID:result[0].movieID},function(error,result){
          if(error) throw error;
          else if(result.length == 0){
            subplaylist.movieID = result[0].movieID;
            subplaylist.save(function(error){
              if(error) throw error;
            });
          }else{

          }
        });

        PlayList.remove({_id:result[0]._id},function(error){
          if(error) throw error;
        });
      }
    });
  });
}
