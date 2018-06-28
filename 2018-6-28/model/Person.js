const mongoose = require("mongoose");
module.exports = mongoose.model('Person', require('../schema/userschema'));

