const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load TimeTable Model
const Timetable = require("../../models/Timetable");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Timetable.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(timetable => {
        if (!timetable) {
          errors.noprofile = "There is no timetable";
          return res.status(404).json(errors);
        }
        res.json(timetable);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    // Skills - Split into array
    if (typeof req.body.Meighttonine !== "undefined") {
      profileFields.Meighttonine = req.body.Meighttonine.split(",");
    }
    if (typeof req.body.Meighttoten !== "undefined") {
      profileFields.Meighttoten = req.body.Meighttoten.split(",");
    }
    if (typeof req.body.Meighttoeleven !== "undefined") {
      profileFields.Meighttoeleven = req.body.Meighttoeleven.split(",");
    }
    if (typeof req.body.Meighttotwelve !== "undefined") {
      profileFields.Meighttotwelve = req.body.Meighttotwelve.split(",");
    }
    if (typeof req.body.Meighttoone !== "undefined") {
      profileFields.Meighttoone = req.body.Meighttoone.split(",");
    }
    if (typeof req.body.Meighttotwo !== "undefined") {
      profileFields.Meighttotwo = req.body.Meighttotwo.split(",");
    }
    if (typeof req.body.Meighttothree !== "undefined") {
      profileFields.Meighttothree = req.body.Meighttothree.split(",");
    }
    if (typeof req.body.Meighttofour !== "undefined") {
      profileFields.Meighttofour = req.body.Meighttofour.split(",");
    }
    if (typeof req.body.Meighttofive !== "undefined") {
      profileFields.Meighttofive = req.body.Meighttofive.split(",");
    }

    if (typeof req.body.Mninetoten !== "undefined") {
      profileFields.Mninetoten = req.body.Mninetoten.split(",");
    }
    if (typeof req.body.Mninetoeleven !== "undefined") {
      profileFields.Mninetoeleven = req.body.Mninetoeleven.split(",");
    }
    if (typeof req.body.Mninetotwelve !== "undefined") {
      profileFields.Mninetotwelve = req.body.Mninetotwelve.split(",");
    }
    if (typeof req.body.Mninetoone !== "undefined") {
      profileFields.Mninetoone = req.body.Mninetoone.split(",");
    }
    if (typeof req.body.Mninetotwo !== "undefined") {
      profileFields.Mninetotwo = req.body.Mninetotwo.split(",");
    }
    if (typeof req.body.Mninetothree !== "undefined") {
      profileFields.Mninetothree = req.body.Mninetothree.split(",");
    }
    if (typeof req.body.Mninetofour !== "undefined") {
      profileFields.Mninetofour = req.body.Mninetofour.split(",");
    }
    if (typeof req.body.Mninetofive !== "undefined") {
      profileFields.Mninetofive = req.body.Mninetofive.split(",");
    }

    if (typeof req.body.Mtentoeleven !== "undefined") {
      profileFields.Mtentoeleven = req.body.Mtentoeleven.split(",");
    }
    if (typeof req.body.Mtentotwelve !== "undefined") {
      profileFields.Mtentotwelve = req.body.Mtentotwelve.split(",");
    }
    if (typeof req.body.Mtentoone !== "undefined") {
      profileFields.Mtentoone = req.body.Mtentoone.split(",");
    }
    if (typeof req.body.Mtentotwo !== "undefined") {
      profileFields.Mtentotwo = req.body.Mtentotwo.split(",");
    }
    if (typeof req.body.Mtentothree !== "undefined") {
      profileFields.Mtentothree = req.body.Mtentothree.split(",");
    }
    if (typeof req.body.Mtentofour !== "undefined") {
      profileFields.Mtentofour = req.body.Mtentofour.split(",");
    }
    if (typeof req.body.Mtentofive !== "undefined") {
      profileFields.Mtentofive = req.body.Mtentofive.split(",");
    }

    if (typeof req.body.Meleventotwelve !== "undefined") {
      profileFields.Meleventotwelve = req.body.Meleventotwelve.split(",");
    }
    if (typeof req.body.Meleventoone !== "undefined") {
      profileFields.Meleventoone = req.body.Meleventoone.split(",");
    }
    if (typeof req.body.Meleventotwo !== "undefined") {
      profileFields.Meleventotwo = req.body.Meleventotwo.split(",");
    }
    if (typeof req.body.Meleventothree !== "undefined") {
      profileFields.Meleventothree = req.body.Meleventothree.split(",");
    }
    if (typeof req.body.Meleventofour !== "undefined") {
      profileFields.Meleventofour = req.body.Meleventofour.split(",");
    }
    if (typeof req.body.Meleventofive !== "undefined") {
      profileFields.Meleventofive = req.body.Meleventofive.split(",");
    }

    if (typeof req.body.Mtwelvetoone !== "undefined") {
      profileFields.Mtwelvetoone = req.body.Mtwelvetoone.split(",");
    }
    if (typeof req.body.Mtwelvetotwo !== "undefined") {
      profileFields.Mtwelvetotwo = req.body.Mtwelvetotwo.split(",");
    }
    if (typeof req.body.Mtwelvetothree !== "undefined") {
      profileFields.Mtwelvetothree = req.body.Mtwelvetothree.split(",");
    }
    if (typeof req.body.Mtwelvetofour !== "undefined") {
      profileFields.Mtwelvetofour = req.body.Mtwelvetofour.split(",");
    }
    if (typeof req.body.Mtwelvetofive !== "undefined") {
      profileFields.Mtwelvetofive = req.body.Mtwelvetofive.split(",");
    }

    if (typeof req.body.Monetotwo !== "undefined") {
      profileFields.Monetotwo = req.body.Monetotwo.split(",");
    }
    if (typeof req.body.Monetothree !== "undefined") {
      profileFields.Monetothree = req.body.Monetothree.split(",");
    }
    if (typeof req.body.Monetofour !== "undefined") {
      profileFields.Monetofour = req.body.Monetofour.split(",");
    }
    if (typeof req.body.Monetofive !== "undefined") {
      profileFields.Monetofive = req.body.Monetofive.split(",");
    }

    if (typeof req.body.Mtwotothree !== "undefined") {
      profileFields.Mtwotothree = req.body.Mtwotothree.split(",");
    }
    if (typeof req.body.Mtwotofour !== "undefined") {
      profileFields.Mtwotofour = req.body.Mtwotofour.split(",");
    }
    if (typeof req.body.Mtwotofive !== "undefined") {
      profileFields.Mtwotofive = req.body.Mtwotofive.split(",");
    }

    if (typeof req.body.Mthreetofour !== "undefined") {
      profileFields.Mthreetofour = req.body.Mthreetofour.split(",");
    }
    if (typeof req.body.Mthreetofive !== "undefined") {
      profileFields.Mthreetofive = req.body.Mthreetofive.split(",");
    }

    if (typeof req.body.Mfourtofive !== "undefined") {
      profileFields.Mfourtofive = req.body.Mfourtofive.split(",");
    }

    if (typeof req.body.Teighttonine !== "undefined") {
      profileFields.Teighttonine = req.body.Teighttonine.split(",");
    }
    if (typeof req.body.Teighttoten !== "undefined") {
      profileFields.Teighttoten = req.body.Teighttoten.split(",");
    }
    if (typeof req.body.Teighttoeleven !== "undefined") {
      profileFields.Teighttoeleven = req.body.Teighttoeleven.split(",");
    }
    if (typeof req.body.Teighttotwelve !== "undefined") {
      profileFields.Teighttotwelve = req.body.Teighttotwelve.split(",");
    }
    if (typeof req.body.Teighttoone !== "undefined") {
      profileFields.Teighttoone = req.body.Teighttoone.split(",");
    }
    if (typeof req.body.Teighttotwo !== "undefined") {
      profileFields.Teighttotwo = req.body.Teighttotwo.split(",");
    }
    if (typeof req.body.Teighttothree !== "undefined") {
      profileFields.Teighttothree = req.body.Teighttothree.split(",");
    }
    if (typeof req.body.Teighttofour !== "undefined") {
      profileFields.Teighttofour = req.body.Teighttofour.split(",");
    }
    if (typeof req.body.Teighttofive !== "undefined") {
      profileFields.Teighttofive = req.body.Teighttofive.split(",");
    }

    if (typeof req.body.Tninetoten !== "undefined") {
      profileFields.Tninetoten = req.body.Tninetoten.split(",");
    }
    if (typeof req.body.Tninetoeleven !== "undefined") {
      profileFields.Tninetoeleven = req.body.Tninetoeleven.split(",");
    }
    if (typeof req.body.Tninetotwelve !== "undefined") {
      profileFields.Tninetotwelve = req.body.Tninetotwelve.split(",");
    }
    if (typeof req.body.Tninetoone !== "undefined") {
      profileFields.Tninetoone = req.body.Tninetoone.split(",");
    }
    if (typeof req.body.Tninetotwo !== "undefined") {
      profileFields.Tninetotwo = req.body.Tninetotwo.split(",");
    }
    if (typeof req.body.Tninetothree !== "undefined") {
      profileFields.Tninetothree = req.body.Tninetothree.split(",");
    }
    if (typeof req.body.Tninetofour !== "undefined") {
      profileFields.Tninetofour = req.body.Tninetofour.split(",");
    }
    if (typeof req.body.Tninetofive !== "undefined") {
      profileFields.Tninetofive = req.body.Tninetofive.split(",");
    }

    if (typeof req.body.Ttentoeleven !== "undefined") {
      profileFields.Ttentoeleven = req.body.Ttentoeleven.split(",");
    }
    if (typeof req.body.Ttentotwelve !== "undefined") {
      profileFields.Ttentotwelve = req.body.Ttentotwelve.split(",");
    }
    if (typeof req.body.Ttentoone !== "undefined") {
      profileFields.Ttentoone = req.body.Ttentoone.split(",");
    }
    if (typeof req.body.Ttentotwo !== "undefined") {
      profileFields.Ttentotwo = req.body.Ttentotwo.split(",");
    }
    if (typeof req.body.Ttentothree !== "undefined") {
      profileFields.Ttentothree = req.body.Ttentothree.split(",");
    }
    if (typeof req.body.Ttentofour !== "undefined") {
      profileFields.Ttentofour = req.body.Ttentofour.split(",");
    }
    if (typeof req.body.Ttentofive !== "undefined") {
      profileFields.Ttentofive = req.body.Ttentofive.split(",");
    }

    if (typeof req.body.Televentotwelve !== "undefined") {
      profileFields.Televentotwelve = req.body.Televentotwelve.split(",");
    }
    if (typeof req.body.Televentoone !== "undefined") {
      profileFields.Televentoone = req.body.Televentoone.split(",");
    }
    if (typeof req.body.Televentotwo !== "undefined") {
      profileFields.Televentotwo = req.body.Televentotwo.split(",");
    }
    if (typeof req.body.Televentothree !== "undefined") {
      profileFields.Televentothree = req.body.Televentothree.split(",");
    }
    if (typeof req.body.Televentofour !== "undefined") {
      profileFields.Televentofour = req.body.Televentofour.split(",");
    }
    if (typeof req.body.Televentofive !== "undefined") {
      profileFields.Televentofive = req.body.Televentofive.split(",");
    }

    if (typeof req.body.Ttwelvetoone !== "undefined") {
      profileFields.Ttwelvetoone = req.body.Ttwelvetoone.split(",");
    }
    if (typeof req.body.Ttwelvetotwo !== "undefined") {
      profileFields.Ttwelvetotwo = req.body.Ttwelvetotwo.split(",");
    }
    if (typeof req.body.Ttwelvetothree !== "undefined") {
      profileFields.Ttwelvetothree = req.body.Ttwelvetothree.split(",");
    }
    if (typeof req.body.Ttwelvetofour !== "undefined") {
      profileFields.Ttwelvetofour = req.body.Ttwelvetofour.split(",");
    }
    if (typeof req.body.Ttwelvetofive !== "undefined") {
      profileFields.Ttwelvetofive = req.body.Ttwelvetofive.split(",");
    }

    if (typeof req.body.Tonetotwo !== "undefined") {
      profileFields.Tonetotwo = req.body.Tonetotwo.split(",");
    }
    if (typeof req.body.Tonetothree !== "undefined") {
      profileFields.Tonetothree = req.body.Tonetothree.split(",");
    }
    if (typeof req.body.Tonetofour !== "undefined") {
      profileFields.Tonetofour = req.body.Tonetofour.split(",");
    }
    if (typeof req.body.Tonetofive !== "undefined") {
      profileFields.Tonetofive = req.body.Tonetofive.split(",");
    }

    if (typeof req.body.Ttwotothree !== "undefined") {
      profileFields.Ttwotothree = req.body.Ttwotothree.split(",");
    }
    if (typeof req.body.Ttwotofour !== "undefined") {
      profileFields.Ttwotofour = req.body.Ttwotofour.split(",");
    }
    if (typeof req.body.Ttwotofive !== "undefined") {
      profileFields.Ttwotofive = req.body.Ttwotofive.split(",");
    }

    if (typeof req.body.Tthreetofour !== "undefined") {
      profileFields.Tthreetofour = req.body.Tthreetofour.split(",");
    }
    if (typeof req.body.Tthreetofive !== "undefined") {
      profileFields.Tthreetofive = req.body.Tthreetofive.split(",");
    }

    if (typeof req.body.Tfourtofive !== "undefined") {
      profileFields.Tfourtofive = req.body.Tfourtofive.split(",");
    }

    if (typeof req.body.Weighttonine !== "undefined") {
      profileFields.Weighttonine = req.body.Weighttonine.split(",");
    }
    if (typeof req.body.Weighttoten !== "undefined") {
      profileFields.Weighttoten = req.body.Weighttoten.split(",");
    }
    if (typeof req.body.Weighttoeleven !== "undefined") {
      profileFields.Weighttoeleven = req.body.Weighttoeleven.split(",");
    }
    if (typeof req.body.Weighttotwelve !== "undefined") {
      profileFields.Weighttotwelve = req.body.Weighttotwelve.split(",");
    }
    if (typeof req.body.Weighttoone !== "undefined") {
      profileFields.Weighttoone = req.body.Weighttoone.split(",");
    }
    if (typeof req.body.Weighttotwo !== "undefined") {
      profileFields.Weighttotwo = req.body.Weighttotwo.split(",");
    }
    if (typeof req.body.Weighttothree !== "undefined") {
      profileFields.Weighttothree = req.body.Weighttothree.split(",");
    }
    if (typeof req.body.Weighttofour !== "undefined") {
      profileFields.Weighttofour = req.body.Weighttofour.split(",");
    }
    if (typeof req.body.Weighttofive !== "undefined") {
      profileFields.Weighttofive = req.body.Weighttofive.split(",");
    }

    if (typeof req.body.Wninetoten !== "undefined") {
      profileFields.Wninetoten = req.body.Wninetoten.split(",");
    }
    if (typeof req.body.Wninetoeleven !== "undefined") {
      profileFields.Wninetoeleven = req.body.Wninetoeleven.split(",");
    }
    if (typeof req.body.Wninetotwelve !== "undefined") {
      profileFields.Wninetotwelve = req.body.Wninetotwelve.split(",");
    }
    if (typeof req.body.Wninetoone !== "undefined") {
      profileFields.Wninetoone = req.body.Wninetoone.split(",");
    }
    if (typeof req.body.Wninetotwo !== "undefined") {
      profileFields.Wninetotwo = req.body.Wninetotwo.split(",");
    }
    if (typeof req.body.Wninetothree !== "undefined") {
      profileFields.Wninetothree = req.body.Wninetothree.split(",");
    }
    if (typeof req.body.Wninetofour !== "undefined") {
      profileFields.Wninetofour = req.body.Wninetofour.split(",");
    }
    if (typeof req.body.Wninetofive !== "undefined") {
      profileFields.Wninetofive = req.body.Wninetofive.split(",");
    }

    if (typeof req.body.Wtentoeleven !== "undefined") {
      profileFields.Wtentoeleven = req.body.Wtentoeleven.split(",");
    }
    if (typeof req.body.Wtentotwelve !== "undefined") {
      profileFields.Wtentotwelve = req.body.Wtentotwelve.split(",");
    }
    if (typeof req.body.Wtentoone !== "undefined") {
      profileFields.Wtentoone = req.body.Wtentoone.split(",");
    }
    if (typeof req.body.Wtentotwo !== "undefined") {
      profileFields.Wtentotwo = req.body.Wtentotwo.split(",");
    }
    if (typeof req.body.Wtentothree !== "undefined") {
      profileFields.Wtentothree = req.body.Wtentothree.split(",");
    }
    if (typeof req.body.Wtentofour !== "undefined") {
      profileFields.Wtentofour = req.body.Wtentofour.split(",");
    }
    if (typeof req.body.Wtentofive !== "undefined") {
      profileFields.Wtentofive = req.body.Wtentofive.split(",");
    }

    if (typeof req.body.Weleventotwelve !== "undefined") {
      profileFields.Weleventotwelve = req.body.Weleventotwelve.split(",");
    }
    if (typeof req.body.Weleventoone !== "undefined") {
      profileFields.Weleventoone = req.body.Weleventoone.split(",");
    }
    if (typeof req.body.Weleventotwo !== "undefined") {
      profileFields.Weleventotwo = req.body.Weleventotwo.split(",");
    }
    if (typeof req.body.Weleventothree !== "undefined") {
      profileFields.Weleventothree = req.body.Weleventothree.split(",");
    }
    if (typeof req.body.Weleventofour !== "undefined") {
      profileFields.Weleventofour = req.body.Weleventofour.split(",");
    }
    if (typeof req.body.Weleventofive !== "undefined") {
      profileFields.Weleventofive = req.body.Weleventofive.split(",");
    }

    if (typeof req.body.Wtwelvetoone !== "undefined") {
      profileFields.Wtwelvetoone = req.body.Wtwelvetoone.split(",");
    }
    if (typeof req.body.Wtwelvetotwo !== "undefined") {
      profileFields.Wtwelvetotwo = req.body.Wtwelvetotwo.split(",");
    }
    if (typeof req.body.Wtwelvetothree !== "undefined") {
      profileFields.Wtwelvetothree = req.body.Wtwelvetothree.split(",");
    }
    if (typeof req.body.Wtwelvetofour !== "undefined") {
      profileFields.Wtwelvetofour = req.body.Wtwelvetofour.split(",");
    }
    if (typeof req.body.Wtwelvetofive !== "undefined") {
      profileFields.Wtwelvetofive = req.body.Wtwelvetofive.split(",");
    }

    if (typeof req.body.Wonetotwo !== "undefined") {
      profileFields.Wonetotwo = req.body.Wonetotwo.split(",");
    }
    if (typeof req.body.Wonetothree !== "undefined") {
      profileFields.Wonetothree = req.body.Wonetothree.split(",");
    }
    if (typeof req.body.Wonetofour !== "undefined") {
      profileFields.Wonetofour = req.body.Wonetofour.split(",");
    }
    if (typeof req.body.Wonetofive !== "undefined") {
      profileFields.Wonetofive = req.body.Wonetofive.split(",");
    }

    if (typeof req.body.Wtwotothree !== "undefined") {
      profileFields.Wtwotothree = req.body.Wtwotothree.split(",");
    }
    if (typeof req.body.Wtwotofour !== "undefined") {
      profileFields.Wtwotofour = req.body.Wtwotofour.split(",");
    }
    if (typeof req.body.Wtwotofive !== "undefined") {
      profileFields.Wtwotofive = req.body.Wtwotofive.split(",");
    }

    if (typeof req.body.Wthreetofour !== "undefined") {
      profileFields.Wthreetofour = req.body.Wthreetofour.split(",");
    }
    if (typeof req.body.Wthreetofive !== "undefined") {
      profileFields.Wthreetofive = req.body.Wthreetofive.split(",");
    }

    if (typeof req.body.Wfourtofive !== "undefined") {
      profileFields.Wfourtofive = req.body.Wfourtofive.split(",");
    }

    if (typeof req.body.THeighttonine !== "undefined") {
      profileFields.THeighttonine = req.body.THeighttonine.split(",");
    }
    if (typeof req.body.THeighttoten !== "undefined") {
      profileFields.THeighttoten = req.body.THeighttoten.split(",");
    }
    if (typeof req.body.THeighttoeleven !== "undefined") {
      profileFields.THeighttoeleven = req.body.THeighttoeleven.split(",");
    }
    if (typeof req.body.THeighttotwelve !== "undefined") {
      profileFields.THeighttotwelve = req.body.THeighttotwelve.split(",");
    }
    if (typeof req.body.THeighttoone !== "undefined") {
      profileFields.THeighttoone = req.body.THeighttoone.split(",");
    }
    if (typeof req.body.THeighttotwo !== "undefined") {
      profileFields.THeighttotwo = req.body.THeighttotwo.split(",");
    }
    if (typeof req.body.THeighttothree !== "undefined") {
      profileFields.THeighttothree = req.body.THeighttothree.split(",");
    }
    if (typeof req.body.THeighttofour !== "undefined") {
      profileFields.THeighttofour = req.body.THeighttofour.split(",");
    }
    if (typeof req.body.THeighttofive !== "undefined") {
      profileFields.THeighttofive = req.body.THeighttofive.split(",");
    }

    if (typeof req.body.THninetoten !== "undefined") {
      profileFields.THninetoten = req.body.THninetoten.split(",");
    }
    if (typeof req.body.THninetoeleven !== "undefined") {
      profileFields.THninetoeleven = req.body.THninetoeleven.split(",");
    }
    if (typeof req.body.THninetotwelve !== "undefined") {
      profileFields.THninetotwelve = req.body.THninetotwelve.split(",");
    }
    if (typeof req.body.THninetoone !== "undefined") {
      profileFields.THninetoone = req.body.THninetoone.split(",");
    }
    if (typeof req.body.THninetotwo !== "undefined") {
      profileFields.THninetotwo = req.body.THninetotwo.split(",");
    }
    if (typeof req.body.THninetothree !== "undefined") {
      profileFields.THninetothree = req.body.THninetothree.split(",");
    }
    if (typeof req.body.THninetofour !== "undefined") {
      profileFields.THninetofour = req.body.THninetofour.split(",");
    }
    if (typeof req.body.THninetofive !== "undefined") {
      profileFields.THninetofive = req.body.THninetofive.split(",");
    }

    if (typeof req.body.THtentoeleven !== "undefined") {
      profileFields.THtentoeleven = req.body.THtentoeleven.split(",");
    }
    if (typeof req.body.THtentotwelve !== "undefined") {
      profileFields.THtentotwelve = req.body.THtentotwelve.split(",");
    }
    if (typeof req.body.THtentoone !== "undefined") {
      profileFields.THtentoone = req.body.THtentoone.split(",");
    }
    if (typeof req.body.THtentotwo !== "undefined") {
      profileFields.THtentotwo = req.body.THtentotwo.split(",");
    }
    if (typeof req.body.THtentothree !== "undefined") {
      profileFields.THtentothree = req.body.THtentothree.split(",");
    }
    if (typeof req.body.THtentofour !== "undefined") {
      profileFields.THtentofour = req.body.THtentofour.split(",");
    }
    if (typeof req.body.THtentofive !== "undefined") {
      profileFields.THtentofive = req.body.THtentofive.split(",");
    }

    if (typeof req.body.THeleventotwelve !== "undefined") {
      profileFields.THeleventotwelve = req.body.THeleventotwelve.split(",");
    }
    if (typeof req.body.THeleventoone !== "undefined") {
      profileFields.THeleventoone = req.body.THeleventoone.split(",");
    }
    if (typeof req.body.THeleventotwo !== "undefined") {
      profileFields.THeleventotwo = req.body.THeleventotwo.split(",");
    }
    if (typeof req.body.THeleventothree !== "undefined") {
      profileFields.THeleventothree = req.body.THeleventothree.split(",");
    }
    if (typeof req.body.THeleventofour !== "undefined") {
      profileFields.THeleventofour = req.body.THeleventofour.split(",");
    }
    if (typeof req.body.THeleventofive !== "undefined") {
      profileFields.THeleventofive = req.body.THeleventofive.split(",");
    }

    if (typeof req.body.THtwelvetoone !== "undefined") {
      profileFields.THtwelvetoone = req.body.THtwelvetoone.split(",");
    }
    if (typeof req.body.THtwelvetotwo !== "undefined") {
      profileFields.THtwelvetotwo = req.body.THtwelvetotwo.split(",");
    }
    if (typeof req.body.THtwelvetothree !== "undefined") {
      profileFields.THtwelvetothree = req.body.THtwelvetothree.split(",");
    }
    if (typeof req.body.THtwelvetofour !== "undefined") {
      profileFields.THtwelvetofour = req.body.THtwelvetofour.split(",");
    }
    if (typeof req.body.THtwelvetofive !== "undefined") {
      profileFields.THtwelvetofive = req.body.THtwelvetofive.split(",");
    }

    if (typeof req.body.THonetotwo !== "undefined") {
      profileFields.THonetotwo = req.body.THonetotwo.split(",");
    }
    if (typeof req.body.THonetothree !== "undefined") {
      profileFields.THonetothree = req.body.THonetothree.split(",");
    }
    if (typeof req.body.THonetofour !== "undefined") {
      profileFields.THonetofour = req.body.THonetofour.split(",");
    }
    if (typeof req.body.THonetofive !== "undefined") {
      profileFields.THonetofive = req.body.THonetofive.split(",");
    }

    if (typeof req.body.THtwotothree !== "undefined") {
      profileFields.THtwotothree = req.body.THtwotothree.split(",");
    }
    if (typeof req.body.THtwotofour !== "undefined") {
      profileFields.THtwotofour = req.body.THtwotofour.split(",");
    }
    if (typeof req.body.THtwotofive !== "undefined") {
      profileFields.THtwotofive = req.body.THtwotofive.split(",");
    }

    if (typeof req.body.THthreetofour !== "undefined") {
      profileFields.THthreetofour = req.body.THthreetofour.split(",");
    }
    if (typeof req.body.THthreetofive !== "undefined") {
      profileFields.THthreetofive = req.body.THthreetofive.split(",");
    }

    if (typeof req.body.THfourtofive !== "undefined") {
      profileFields.THfourtofive = req.body.THfourtofive.split(",");
    }

    if (typeof req.body.Feighttonine !== "undefined") {
      profileFields.Feighttonine = req.body.Feighttonine.split(",");
    }
    if (typeof req.body.Feighttoten !== "undefined") {
      profileFields.Feighttoten = req.body.Feighttoten.split(",");
    }
    if (typeof req.body.Feighttoeleven !== "undefined") {
      profileFields.Feighttoeleven = req.body.Feighttoeleven.split(",");
    }
    if (typeof req.body.Feighttotwelve !== "undefined") {
      profileFields.Feighttotwelve = req.body.Feighttotwelve.split(",");
    }
    if (typeof req.body.Feighttoone !== "undefined") {
      profileFields.Feighttoone = req.body.Feighttoone.split(",");
    }
    if (typeof req.body.Feighttotwo !== "undefined") {
      profileFields.Feighttotwo = req.body.Feighttotwo.split(",");
    }
    if (typeof req.body.Feighttothree !== "undefined") {
      profileFields.Feighttothree = req.body.Feighttothree.split(",");
    }
    if (typeof req.body.Feighttofour !== "undefined") {
      profileFields.Feighttofour = req.body.Feighttofour.split(",");
    }
    if (typeof req.body.Feighttofive !== "undefined") {
      profileFields.Feighttofive = req.body.Feighttofive.split(",");
    }

    if (typeof req.body.Fninetoten !== "undefined") {
      profileFields.Fninetoten = req.body.Fninetoten.split(",");
    }
    if (typeof req.body.Fninetoeleven !== "undefined") {
      profileFields.Fninetoeleven = req.body.Fninetoeleven.split(",");
    }
    if (typeof req.body.Fninetotwelve !== "undefined") {
      profileFields.Fninetotwelve = req.body.Fninetotwelve.split(",");
    }
    if (typeof req.body.Fninetoone !== "undefined") {
      profileFields.Fninetoone = req.body.Fninetoone.split(",");
    }
    if (typeof req.body.Fninetotwo !== "undefined") {
      profileFields.Fninetotwo = req.body.Fninetotwo.split(",");
    }
    if (typeof req.body.Fninetothree !== "undefined") {
      profileFields.Fninetothree = req.body.Fninetothree.split(",");
    }
    if (typeof req.body.Fninetofour !== "undefined") {
      profileFields.Fninetofour = req.body.Fninetofour.split(",");
    }
    if (typeof req.body.Fninetofive !== "undefined") {
      profileFields.Fninetofive = req.body.Fninetofive.split(",");
    }

    if (typeof req.body.Ftentoeleven !== "undefined") {
      profileFields.Ftentoeleven = req.body.Ftentoeleven.split(",");
    }
    if (typeof req.body.Ftentotwelve !== "undefined") {
      profileFields.Ftentotwelve = req.body.Ftentotwelve.split(",");
    }
    if (typeof req.body.Ftentoone !== "undefined") {
      profileFields.Ftentoone = req.body.Ftentoone.split(",");
    }
    if (typeof req.body.Ftentotwo !== "undefined") {
      profileFields.Ftentotwo = req.body.Ftentotwo.split(",");
    }
    if (typeof req.body.Ftentothree !== "undefined") {
      profileFields.Ftentothree = req.body.Ftentothree.split(",");
    }
    if (typeof req.body.Ftentofour !== "undefined") {
      profileFields.Ftentofour = req.body.Ftentofour.split(",");
    }
    if (typeof req.body.Ftentofive !== "undefined") {
      profileFields.Ftentofive = req.body.Ftentofive.split(",");
    }

    if (typeof req.body.Feleventotwelve !== "undefined") {
      profileFields.Feleventotwelve = req.body.Feleventotwelve.split(",");
    }
    if (typeof req.body.Feleventoone !== "undefined") {
      profileFields.Feleventoone = req.body.Feleventoone.split(",");
    }
    if (typeof req.body.Feleventotwo !== "undefined") {
      profileFields.Feleventotwo = req.body.Feleventotwo.split(",");
    }
    if (typeof req.body.Feleventothree !== "undefined") {
      profileFields.Feleventothree = req.body.Feleventothree.split(",");
    }
    if (typeof req.body.Feleventofour !== "undefined") {
      profileFields.Feleventofour = req.body.Feleventofour.split(",");
    }
    if (typeof req.body.Feleventofive !== "undefined") {
      profileFields.Feleventofive = req.body.Feleventofive.split(",");
    }

    if (typeof req.body.Ftwelvetoone !== "undefined") {
      profileFields.Ftwelvetoone = req.body.Ftwelvetoone.split(",");
    }
    if (typeof req.body.Ftwelvetotwo !== "undefined") {
      profileFields.Ftwelvetotwo = req.body.Ftwelvetotwo.split(",");
    }
    if (typeof req.body.Ftwelvetothree !== "undefined") {
      profileFields.Ftwelvetothree = req.body.Ftwelvetothree.split(",");
    }
    if (typeof req.body.Ftwelvetofour !== "undefined") {
      profileFields.Ftwelvetofour = req.body.Ftwelvetofour.split(",");
    }
    if (typeof req.body.Ftwelvetofive !== "undefined") {
      profileFields.Ftwelvetofive = req.body.Ftwelvetofive.split(",");
    }

    if (typeof req.body.Fonetotwo !== "undefined") {
      profileFields.Fonetotwo = req.body.Fonetotwo.split(",");
    }
    if (typeof req.body.Fonetothree !== "undefined") {
      profileFields.Fonetothree = req.body.Fonetothree.split(",");
    }
    if (typeof req.body.Fonetofour !== "undefined") {
      profileFields.Fonetofour = req.body.Fonetofour.split(",");
    }
    if (typeof req.body.Fonetofive !== "undefined") {
      profileFields.Fonetofive = req.body.Fonetofive.split(",");
    }

    if (typeof req.body.Ftwotothree !== "undefined") {
      profileFields.Ftwotothree = req.body.Ftwotothree.split(",");
    }
    if (typeof req.body.Ftwotofour !== "undefined") {
      profileFields.Ftwotofour = req.body.Ftwotofour.split(",");
    }
    if (typeof req.body.Ftwotofive !== "undefined") {
      profileFields.Ftwotofive = req.body.Ftwotofive.split(",");
    }

    if (typeof req.body.Fthreetofour !== "undefined") {
      profileFields.Fthreetofour = req.body.Fthreetofour.split(",");
    }
    if (typeof req.body.Fthreetofive !== "undefined") {
      profileFields.Fthreetofive = req.body.Fthreetofive.split(",");
    }

    if (typeof req.body.Ffourtofive !== "undefined") {
      profileFields.Ffourtofive = req.body.Ffourtofive.split(",");
    }

    Timetable.findOne({ user: req.user.id }).then(timetable => {
      if (timetable) {
        //update
        Timetable.findOneAndUpdate(
          { user: req.user.id },
          { $set: timetableFields },
          { new: true }
        ).then(timetable => res.json(timetable));
      } else {
        //create

        // check if handle exists

        // save Profile
        new Timetable(profileFields)
          .save()
          .then(timetable => res.json(timetable));
      }
    });
  }
);

module.exports = router;
