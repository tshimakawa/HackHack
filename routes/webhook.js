const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
  let text = "";
  let url = "";
  let videoID = ""
  text = req.body.text;
  if(text.length > 7){//slackに投稿されたメッセージが8文字以上の場合
    url = text.substr(1,text.length-2);
    if(url.substr(0,8) == 'https://'){
      if(url.indexOf('v=') != -1){
        console.log(url.substr(url.indexOf('v=')+2,11));
      }
    }else{
      console.log(url.substr(0,8));
    }
  }else{
    console.log("cccccccc");
  }
});

module.exports = router;
