const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainList = new Schema({
  movieID:{type:String,require:true}
});

module.exports = mongoose.model('mainlist',MainList);
