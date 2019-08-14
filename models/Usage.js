const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UsageSchema = new Schema({
  hallname: {
    type: String,
    required: true
  },
  timesOfUsage: {
    type: String,
    required: true
  },
  
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UsageSchema);
