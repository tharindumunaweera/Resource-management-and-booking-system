const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NineSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  Meighttonine: {
    type: [String]
  },
  Mninetoten: {
    type: [String]
  },
  Mtentoeleven: {
    type: [String]
  },
  Meleventotwelve: {
    type: [String]
  },
  Mtwelvetoone: {
    type: [String]
  },
  Monetotwo: {
    type: [String]
  },
  Mtwotothree: {
    type: [String]
  },
  Mthreetofour: {
    type: [String]
  },
  Mfourtofive: {
    type: [String]
  },

  Teighttonine: {
    type: [String]
  },
  Tninetoten: {
    type: [String]
  },
  Ttentoeleven: {
    type: [String]
  },
  Televentotwelve: {
    type: [String]
  },
  Ttwelvetoone: {
    type: [String]
  },
  Tonetotwo: {
    type: [String]
  },
  Ttwotothree: {
    type: [String]
  },
  Tthreetofour: {
    type: [String]
  },
  Tfourtofive: {
    type: [String]
  },

  Weighttonine: {
    type: [String]
  },
  Wninetoten: {
    type: [String]
  },
  Wtentoeleven: {
    type: [String]
  },
  Weleventotwelve: {
    type: [String]
  },
  Wtwelvetoone: {
    type: [String]
  },
  Wonetotwo: {
    type: [String]
  },
  Wtwotothree: {
    type: [String]
  },
  Wthreetofour: {
    type: [String]
  },
  Wfourtofive: {
    type: [String]
  },
  THeighttonine: {
    type: [String]
  },
  THninetoten: {
    type: [String]
  },
  THtentoeleven: {
    type: [String]
  },
  THeleventotwelve: {
    type: [String]
  },
  THtwelvetoone: {
    type: [String]
  },
  THonetotwo: {
    type: [String]
  },
  THtwotothree: {
    type: [String]
  },
  THthreetofour: {
    type: [String]
  },
  THfourtofive: {
    type: [String]
  },
  Feighttonine: {
    type: [String]
  },
  Fninetoten: {
    type: [String]
  },
  Ftentoeleven: {
    type: [String]
  },
  Feleventotwelve: {
    type: [String]
  },
  Ftwelvetoone: {
    type: [String]
  },
  Fonetotwo: {
    type: [String]
  },
  Ftwotothree: {
    type: [String]
  },
  Fthreetofour: {
    type: [String]
  },
  Ffourtofive: {
    type: [String]
  }
});

module.exports = Nine = mongoose.model("nine", NineSchema);
