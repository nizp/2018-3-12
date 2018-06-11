/**
 * Created by Moudi on 2017/2/23.
 */

const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    username: String,
    password: String
});