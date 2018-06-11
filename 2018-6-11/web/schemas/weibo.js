/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  content: String,
  time: Number,
  like: Number,
  dislike: Number
});