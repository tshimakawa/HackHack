const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema({
  movieID:{type:String,require:true}
});
