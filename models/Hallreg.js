const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const HallRegisterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  hallname: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  seat: {
    type: Number,
    required: true
  },
  projecter: {
    type: String,
    required: true
  },
  whiteboard: {
    type: String,
    required: true
  },
  other: {
    type: String,
    required: true
  },

});

module.exports = mongoose.model("HallRegisterSchema", HallRegisterSchema);
