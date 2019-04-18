const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ElevenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  Mninetotwelve: {
    type: [String]
  },
  Mninetoone: {
    type: [String]
  },
  Mninetotwo: {
    type: [String]
  },
  Mninetothree: {
    type: [String]
  },
  Mninetofour: {
    type: [String]
  },
  Mninetofive: {
    type: [String]
  },

  Tninetotwelve: {
    type: [String]
  },
  Tninetoone: {
    type: [String]
  },
  Tninetotwo: {
    type: [String]
  },
  Tninetothree: {
    type: [String]
  },
  Tninetofour: {
    type: [String]
  },
  Tninetofive: {
    type: [String]
  },

  Wninetotwelve: {
    type: [String]
  },
  Wninetoone: {
    type: [String]
  },
  Wninetotwo: {
    type: [String]
  },
  Wninetothree: {
    type: [String]
  },
  Wninetofour: {
    type: [String]
  },
  Wninetofive: {
    type: [String]
  },

  THninetotwelve: {
    type: [String]
  },
  THninetoone: {
    type: [String]
  },
  THninetotwo: {
    type: [String]
  },
  THninetothree: {
    type: [String]
  },
  THninetofour: {
    type: [String]
  },
  THninetofive: {
    type: [String]
  },

  Fninetotwelve: {
    type: [String]
  },
  Fninetoone: {
    type: [String]
  },
  Fninetotwo: {
    type: [String]
  },
  Fninetothree: {
    type: [String]
  },
  Fninetofour: {
    type: [String]
  },
  Fninetofive: {
    type: [String]
  }
});

module.exports = Eleven = mongoose.model("eleven", ElevenSchema);
