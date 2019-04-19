const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  Mtentoeleven: {
    type: [String]
  },
  Mtentotwelve: {
    type: [String]
  },
  Mtentoone: {
    type: [String]
  },
  Mtentotwo: {
    type: [String]
  },
  Mtentothree: {
    type: [String]
  },
  Mtentofour: {
    type: [String]
  },
  Mtentofive: {
    type: [String]
  },

  Ttentoeleven: {
    type: [String]
  },
  Ttentotwelve: {
    type: [String]
  },
  Ttentoone: {
    type: [String]
  },
  Ttentotwo: {
    type: [String]
  },
  Ttentothree: {
    type: [String]
  },
  Ttentofour: {
    type: [String]
  },
  Ttentofive: {
    type: [String]
  },

  Wtentoeleven: {
    type: [String]
  },
  Wtentotwelve: {
    type: [String]
  },
  Wtentoone: {
    type: [String]
  },
  Wtentotwo: {
    type: [String]
  },
  Wtentothree: {
    type: [String]
  },
  Wtentofour: {
    type: [String]
  },
  Wtentofive: {
    type: [String]
  },

  THtentoeleven: {
    type: [String]
  },
  THtentotwelve: {
    type: [String]
  },
  THtentoone: {
    type: [String]
  },
  THtentotwo: {
    type: [String]
  },
  THtentothree: {
    type: [String]
  },
  THtentofour: {
    type: [String]
  },
  THtentofive: {
    type: [String]
  },

  Ftentoeleven: {
    type: [String]
  },
  Ftentotwelve: {
    type: [String]
  },
  Ftentoone: {
    type: [String]
  },
  Ftentotwo: {
    type: [String]
  },
  Ftentothree: {
    type: [String]
  },
  Ftentofour: {
    type: [String]
  },
  Ftentofive: {
    type: [String]
  }
});

module.exports = Ten = mongoose.model("ten", TenSchema);
