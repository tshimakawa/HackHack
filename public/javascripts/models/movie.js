const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
  movieID:{type:String,require:true}
});

module.exports = mongoose.model('movie',Movie);
