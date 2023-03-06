const mongoose = require('mongoose');

mongoose.set("debug","true");
const db = mongoose.connect('mongodb://127.0.0.1:27017/kerbs');

module.exports = db;
