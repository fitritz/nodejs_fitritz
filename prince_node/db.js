// db.js exports connection object directly ✅

require("dotenv").config();
const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL);
const db = mongoose.connection;
// ... event handlers
module.exports = db;  // Object, not function
