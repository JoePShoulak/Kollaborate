const mongoose = require('mongoose');
// mongoose.set("debug","true");
// console.log(process.env);
const db = mongoose.connect(process.env.MONGOURL);

module.exports = db;
