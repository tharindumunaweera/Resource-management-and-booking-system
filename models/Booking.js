const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  hallname: {
    type: String
  },
  date: {
    type: String
  },
  book: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Booking = mongoose.model("booking", BookingSchema);
