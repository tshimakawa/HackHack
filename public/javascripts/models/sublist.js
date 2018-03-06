const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubList = new Schema({
  movieID:{type:String,require:true}
});

module.exports = mongoose.model('sublist',SubList);
