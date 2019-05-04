const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FilterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  dayofweek: {
    type: String
  },
  hallname: {
    type: String
  }

  //   date: {
  //     type: Date,
  //     default: Date.now
  //   }
});

module.exports = Profile = mongoose.model("filter", FilterSchema);
