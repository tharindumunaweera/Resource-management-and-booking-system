const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ElevenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  Meleventotwelve: {
    type: [String]
  },
  Meleventoone: {
    type: [String]
  },
  Meleventotwo: {
    type: [String]
  },
  Meleventothree: {
    type: [String]
  },
  Meleventofour: {
    type: [String]
  },
  Meleventofive: {
    type: [String]
  },

  Televentotwelve: {
    type: [String]
  },
  Televentoone: {
    type: [String]
  },
  Televentotwo: {
    type: [String]
  },
  Televentothree: {
    type: [String]
  },
  Televentofour: {
    type: [String]
  },
  Televentofive: {
    type: [String]
  },

  Weleventotwelve: {
    type: [String]
  },
  Weleventoone: {
    type: [String]
  },
  Weleventotwo: {
    type: [String]
  },
  Weleventothree: {
    type: [String]
  },
  Weleventofour: {
    type: [String]
  },
  Weleventofive: {
    type: [String]
  },

  THeleventotwelve: {
    type: [String]
  },
  THeleventoone: {
    type: [String]
  },
  THeleventotwo: {
    type: [String]
  },
  THeleventothree: {
    type: [String]
  },
  THeleventofour: {
    type: [String]
  },
  THeleventofive: {
    type: [String]
  },

  Feleventotwelve: {
    type: [String]
  },
  Feleventoone: {
    type: [String]
  },
  Feleventotwo: {
    type: [String]
  },
  Feleventothree: {
    type: [String]
  },
  Feleventofour: {
    type: [String]
  },
  Feleventofive: {
    type: [String]
  }
});

module.exports = Eleven = mongoose.model("eleven", ElevenSchema);
