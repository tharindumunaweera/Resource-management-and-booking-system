const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MunSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  Meighttonine: {
    type: [String]
  },
  Meighttoten: {
    type: [String]
  },
  Meighttoeleven: {
    type: [String]
  },
  Meighttotwelve: {
    type: [String]
  },
  Meighttoone: {
    type: [String]
  },
  Meighttotwo: {
    type: [String]
  },
  Meighttothree: {
    type: [String]
  },
  Meighttofour: {
    type: [String]
  },
  Meighttofive: {
    type: [String]
  },
  Teighttonine: {
    type: [String]
  },
  Teighttoten: {
    type: [String]
  },
  Teighttoeleven: {
    type: [String]
  },
  Teighttotwelve: {
    type: [String]
  },
  Teighttoone: {
    type: [String]
  },
  Teighttotwo: {
    type: [String]
  },
  Teighttothree: {
    type: [String]
  },
  Teighttofour: {
    type: [String]
  },
  Teighttofive: {
    type: [String]
  },
  Weighttonine: {
    type: [String]
  },
  Weighttoten: {
    type: [String]
  },
  Weighttoeleven: {
    type: [String]
  },
  Weighttotwelve: {
    type: [String]
  },
  Weighttoone: {
    type: [String]
  },
  Weighttotwo: {
    type: [String]
  },
  Weighttothree: {
    type: [String]
  },
  Weighttofour: {
    type: [String]
  },
  Weighttofive: {
    type: [String]
  },
  THeighttonine: {
    type: [String]
  },
  THeighttoten: {
    type: [String]
  },
  THeighttoeleven: {
    type: [String]
  },
  THeighttotwelve: {
    type: [String]
  },
  THeighttoone: {
    type: [String]
  },
  THeighttotwo: {
    type: [String]
  },
  THeighttothree: {
    type: [String]
  },
  THeighttofour: {
    type: [String]
  },
  THeighttofive: {
    type: [String]
  },

  Feighttonine: {
    type: [String]
  },
  Feighttoten: {
    type: [String]
  },
  Feighttoeleven: {
    type: [String]
  },
  Feighttotwelve: {
    type: [String]
  },
  Feighttoone: {
    type: [String]
  },
  Feighttotwo: {
    type: [String]
  },
  Feighttothree: {
    type: [String]
  },
  Feighttofour: {
    type: [String]
  },
  Feighttofive: {
    type: [String]
  }
});

module.exports = Mun = mongoose.model("mun", MunSchema);
