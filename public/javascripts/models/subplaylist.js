const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subPlayList = new Schema({
  movieID:{type:String,require:true}
});

module.exports = mongoose.model('subplaylist',subPlayList);
