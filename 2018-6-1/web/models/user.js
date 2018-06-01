/**
 * Created by Moudi on 2017/2/23.
 */
const mongoose = require('mongoose');
const usersSchema = require('../schemas/users');

module.exports = mongoose.model('User', usersSchema);