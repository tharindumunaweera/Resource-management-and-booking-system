const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TimetableSchema = new Schema({
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

      Mninetoten: {
        type: [String]
       
      },
      Mninetoeleven: {
        type: [String]
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
      Mtwelvetoone: {
        type: [String]
        
      },
      Mtwelvetotwo: {
        type: [String]
      },
      Mtwelvetothree: {
        type: [String]
      },
      Mtwelvetofour: {
        type: [String]
      },
      Mtwelvetofive: {
        type: [String]
      },
      Monetotwo: {
        type: [String]
      },
      Monetothree: {
        type: [String]
      },
      Monetofour: {
        type: [String]
      },
      Monetofive: {
        type: [String]
      },
      Mtwotothree: {
        type: [String]
      },
      Mtwotofour: {
        type: [String]
      },
      Mtwotofive: {
        type: [String]
      },
      Mthreetofour: {
        type: [String]
      },
      Mthreetofive: {
        type: [String]
      },
      Mfourtofive: {
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

      Tninetoten: {
        type: [String]
       
      },
      Tninetoeleven: {
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
      Ttwelvetoone: {
        type: [String]
        
      },
      Ttwelvetotwo: {
        type: [String]
      },
      Ttwelvetothree: {
        type: [String]
      },
      Ttwelvetofour: {
        type: [String]
      },
      Ttwelvetofive: {
        type: [String]
      },
      Tonetotwo: {
        type: [String]
      },
      Tonetothree: {
        type: [String]
      },
      Tonetofour: {
        type: [String]
      },
      Tonetofive: {
        type: [String]
      },
      Ttwotothree: {
        type: [String]
      },
      Ttwotofour: {
        type: [String]
      },
      Ttwotofive: {
        type: [String]
      },
      Tthreetofour: {
        type: [String]
      },
      Tthreetofive: {
        type: [String]
      },
      Tfourtofive: {
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

      Wninetoten: {
        type: [String]
       
      },
      Wninetoeleven: {
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
      Wtwelvetoone: {
        type: [String]
        
      },
      Wtwelvetotwo: {
        type: [String]
      },
      Wtwelvetothree: {
        type: [String]
      },
      Wtwelvetofour: {
        type: [String]
      },
      Wtwelvetofive: {
        type: [String]
      },
      Wonetotwo: {
        type: [String]
      },
      Wonetothree: {
        type: [String]
      },
      Wonetofour: {
        type: [String]
      },
      Wonetofive: {
        type: [String]
      },
      Wtwotothree: {
        type: [String]
      },
      Wtwotofour: {
        type: [String]
      },
      Wtwotofive: {
        type: [String]
      },
      Wthreetofour: {
        type: [String]
      },
      Wthreetofive: {
        type: [String]
      },
      Wfourtofive: {
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

      THninetoten: {
        type: [String]
       
      },
      THninetoeleven: {
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
      THtwelvetoone: {
        type: [String]
        
      },
      THtwelvetotwo: {
        type: [String]
      },
      THtwelvetothree: {
        type: [String]
      },
      THtwelvetofour: {
        type: [String]
      },
      THtwelvetofive: {
        type: [String]
      },
      THonetotwo: {
        type: [String]
      },
      THonetothree: {
        type: [String]
      },
      THonetofour: {
        type: [String]
      },
      THonetofive: {
        type: [String]
      },
      THtwotothree: {
        type: [String]
      },
      THtwotofour: {
        type: [String]
      },
      THtwotofive: {
        type: [String]
      },
      THthreetofour: {
        type: [String]
      },
      THthreetofive: {
        type: [String]
      },
      THfourtofive: {
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
      },

      Fninetoten: {
        type: [String]
       
      },
      Fninetoeleven: {
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
      },
      Ftwelvetoone: {
        type: [String]
        
      },
      Ftwelvetotwo: {
        type: [String]
      },
      Ftwelvetothree: {
        type: [String]
      },
      Ftwelvetofour: {
        type: [String]
      },
      Ftwelvetofive: {
        type: [String]
      },
      Fonetotwo: {
        type: [String]
      },
      Fonetothree: {
        type: [String]
      },
      Fonetofour: {
        type: [String]
      },
      Fonetofive: {
        type: [String]
      },
      Ftwotothree: {
        type: [String]
      },
      Ftwotofour: {
        type: [String]
      },
      Ftwotofive: {
        type: [String]
      },
      Fthreetofour: {
        type: [String]
      },
      Fthreetofive: {
        type: [String]
      },
      Ffourtofive: {
        type: [String]
      },
   
});

module.exports = Timetable = mongoose.model("timetable", TimetableSchema);
