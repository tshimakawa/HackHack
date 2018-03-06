const mongoDB = require('mongoose');
//モデル（スキーマ）の宣言
const MainList = require('../models/mainlist');
const SubList = require('../models/sublist');

exports.removeMovieID = function(movieInfo){
  const sublist = new SubList();
  sublist.find({movieID:movieInfo.movieID},function(error,sublist_result){
    if(error) throw error;
    else if(sublist_result.length == 0){
      sublist.movieID = movieInfo.movieID;
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
  MainList.remove({_id:movieInfo._id},function(error){
    if(error) throw error;
    else console.log("MainListからの削除に成功");
  });
}
