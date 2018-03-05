const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
  let text = "";
  let url = "";
  text = req.body.text;
  if(text.length > 7){//slackに投稿されたメッセージが8文字以上の場合
    url = text.substr(1,text.length-2);
    if(url.substr(0,6) == 'https://'){
      console.log("aaaaaaa");
    }else{
      
    }
  }else{

  }
});

module.exports = router;
