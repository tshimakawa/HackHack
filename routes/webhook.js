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
  url = text.substr(1,text.length-2);
  console.log(url);
});

module.exports = router;
