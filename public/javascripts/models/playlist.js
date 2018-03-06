const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayList = new Schema({
  movieID:{type:String,require:true}
});

module.exports = mongoose.model('playlist',PlayList);
