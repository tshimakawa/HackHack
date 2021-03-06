const express = require('express');
const router = express.Router();
const modules = require('../public/javascripts/modules');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
  res.send("success");
  
  let text = "";
  let url = "";
  let movieID = ""
  text = req.body.text;
  if(text.length > 7){//slackに投稿されたメッセージが8文字以上の場合
    url = text.substr(1,text.length-2);
    if(url.substr(0,8) == 'https://'){
      if(url.indexOf('v=') != -1){
        movieID = url.substr(url.indexOf('v=')+2,11);
        modules.putMovieID.putMovieID(movieID).then(
          function(result){
            console.log("movieIDの登録に成功");
          },function(error){
            console.log(error);
          }
        );
      }
    }else{
      console.log(url.substr(0,8));
    }
  }else{
    console.log("cccccccc");
  }
});

module.exports = router;
