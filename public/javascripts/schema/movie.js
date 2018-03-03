const mongoose = require('mongoose');
const schema = mongoose.Schema;

const movie = new Schema({
  movieID:{type:String,require:true}  
});
