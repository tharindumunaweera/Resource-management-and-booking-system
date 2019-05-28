const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Nine = require("../../models/Nine");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",

  (req, res) => {
    const errors = {};

    Nine.findOne()
      .populate("user", ["name", "avatar"])
      .then(nine => {
        if (!nine) {
          errors.nonine = "There is no profile for  this user";
          return res.status(404).json(errors);
        }
        res.json(nine);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/",

  (req, res) => {
    //Check validation

    //Get fields
    const profileFields = {};


    // if (req.body.Mninetoten)
    //   profileFields.Mninetoten = req.body.Mninetoten.split(",");
    // if (req.body.Mninetoeleven)
    //   profileFields.Mninetoeleven = req.body.Mninetoeleven.split(",");
    // if (req.body.Mninetotwelve)
    //   profileFields.Mninetotwelve = req.body.Mninetotwelve.split(",");
    // if (req.body.Mninetoone)
    //   profileFields.Mninetoone = req.body.Mninetoone.split(",");
    // if (req.body.Mninetotwo)
    //   profileFields.Mninetotwo = req.body.Mninetotwo.split(",");
    // if (req.body.Mninetothree)
    //   profileFields.Mninetothree = req.body.Mninetothree.split(",");
    // if (req.body.Mninetofour)
    //   profileFields.Mninetofour = req.body.Mninetofour.split(",");
    // if (req.body.Mninetofive)
    //   profileFields.Mninetofive = req.body.Mninetofive.split(",");

    // if (req.body.Tninetoten)
    //   profileFields.Tninetoten = req.body.Tninetoten.split(",");
    // if (req.body.Tninetoeleven)
    //   profileFields.Tninetoeleven = req.body.Tninetoeleven.split(",");
    // if (req.body.Tninetotwelve)
    //   profileFields.Tninetotwelve = req.body.Tninetotwelve.split(",");
    // if (req.body.Tninetoone)
    //   profileFields.Tninetoone = req.body.Tninetoone.split(",");
    // if (req.body.Tninetotwo)
    //   profileFields.Tninetotwo = req.body.Tninetotwo.split(",");
    // if (req.body.Tninetothree)
    //   profileFields.Tninetothree = req.body.Tninetothree.split(",");
    // if (req.body.Tninetofour)
    //   profileFields.Tninetofour = req.body.Tninetofour.split(",");
    // if (req.body.Tninetofive)
    //   profileFields.Tninetofive = req.body.Tninetofive.split(",");

    // if (req.body.Wninetoten)
    //   profileFields.Wninetoten = req.body.Wninetoten.split(",");
    // if (req.body.Wninetoeleven)
    //   profileFields.Wninetoeleven = req.body.Wninetoeleven.split(",");
    // if (req.body.Wninetotwelve)
    //   profileFields.Wninetotwelve = req.body.Wninetotwelve.split(",");
    // if (req.body.Wninetoone)
    //   profileFields.Wninetoone = req.body.Wninetoone.split(",");
    // if (req.body.Wninetotwo)
    //   profileFields.Wninetotwo = req.body.Wninetotwo.split(",");
    // if (req.body.Wninetothree)
    //   profileFields.Wninetothree = req.body.Wninetothree.split(",");
    // if (req.body.Wninetofour)
    //   profileFields.Wninetofour = req.body.Wninetofour.split(",");
    // if (req.body.Wninetofive)
    //   profileFields.Wninetofive = req.body.Wninetofive.split(",");

    // if (req.body.THninetoten)
    //   profileFields.THninetoten = req.body.THninetoten.split(",");
    // if (req.body.THninetoeleven)
    //   profileFields.THninetoeleven = req.body.THninetoeleven.split(",");
    // if (req.body.THninetotwelve)
    //   profileFields.THninetotwelve = req.body.THninetotwelve.split(",");
    // if (req.body.THninetoone)
    //   profileFields.THninetoone = req.body.THninetoone.split(",");
    // if (req.body.THninetotwo)
    //   profileFields.THninetotwo = req.body.THninetotwo.split(",");
    // if (req.body.THninetothree)
    //   profileFields.THninetothree = req.body.THninetothree.split(",");
    // if (req.body.THninetofour)
    //   profileFields.THninetofour = req.body.THninetofour.split(",");
    // if (req.body.THninetofive)
    //   profileFields.THninetofive = req.body.THninetofive.split(",");

    // if (req.body.Fninetoten)
    //   profileFields.Fninetoten = req.body.Fninetoten.split(",");
    // if (req.body.Fninetoeleven)
    //   profileFields.Fninetoeleven = req.body.Fninetoeleven.split(",");
    // if (req.body.Fninetotwelve)
    //   profileFields.Fninetotwelve = req.body.Fninetotwelve.split(",");
    // if (req.body.Fninetoone)
    //   profileFields.Fninetoone = req.body.Fninetoone.split(",");
    // if (req.body.Fninetotwo)
    //   profileFields.Fninetotwo = req.body.Fninetotwo.split(",");
    // if (req.body.Fninetothree)
    //   profileFields.Fninetothree = req.body.Fninetothree.split(",");
    // if (req.body.Fninetofour)
    //   profileFields.Fninetofour = req.body.Fninetofour.split(",");
    // if (req.body.Fninetofive)
    //   profileFields.Fninetofive = req.body.Fninetofive.split(",");
    if (typeof req.body.Meighttonine !== "undefined") {
      profileFields.Meighttonine = req.body.Meighttonine.split(",");
    }
    if (typeof req.body.Mninetoten !== "undefined") {
      profileFields.Mninetoten = req.body.Mninetoten.split(",");
    }
    if (typeof req.body.Mtentoeleven !== "undefined") {
      profileFields.Mtentoeleven = req.body.Mtentoeleven.split(",");
    }
    if (typeof req.body.Meleventotwelve !== "undefined") {
      profileFields.Meleventotwelve = req.body.Meleventotwelve.split(",");
    }
    if (typeof req.body.Mtwelvetoone !== "undefined") {
      profileFields.Mtwelvetoone = req.body.Mtwelvetoone.split(",");
    }
    if (typeof req.body.Monetotwo !== "undefined") {
      profileFields.Monetotwo = req.body.Monetotwo.split(",");
    }
    if (typeof req.body.Mtwotothree !== "undefined") {
      profileFields.Mtwotothree = req.body.Mtwotothree.split(",");
    }
    if (typeof req.body.Mthreetofour !== "undefined") {
      profileFields.Mthreetofour = req.body.Mthreetofour.split(",");
    }
    if (typeof req.body.Mfourtofive !== "undefined") {
      profileFields.Mfourtofive = req.body.Mfourtofive.split(",");
    }

    if (typeof req.body.Teighttonine !== "undefined") {
      profileFields.Teighttonine = req.body.Teighttonine.split(",");
    }
    if (typeof req.body.Tninetoten !== "undefined") {
      profileFields.Tninetoten = req.body.Tninetoten.split(",");
    }
    if (typeof req.body.Ttentoeleven !== "undefined") {
      profileFields.Ttentoeleven = req.body.Ttentoeleven.split(",");
    }
    if (typeof req.body.Televentotwelve !== "undefined") {
      profileFields.Televentotwelve = req.body.Televentotwelve.split(",");
    }
    if (typeof req.body.Ttwelvetoone !== "undefined") {
      profileFields.Ttwelvetoone = req.body.Ttwelvetoone.split(",");
    }
    if (typeof req.body.Tonetotwo !== "undefined") {
      profileFields.Tonetotwo = req.body.Tonetotwo.split(",");
    }
    if (typeof req.body.Ttwotothree !== "undefined") {
      profileFields.Ttwotothree = req.body.Ttwotothree.split(",");
    }
    if (typeof req.body.Tthreetofour !== "undefined") {
      profileFields.Tthreetofour = req.body.Tthreetofour.split(",");
    }
    if (typeof req.body.Tfourtofive !== "undefined") {
      profileFields.Tfourtofive = req.body.Tfourtofive.split(",");
    }

    if (typeof req.body.Weighttonine !== "undefined") {
      profileFields.Weighttonine = req.body.Weighttonine.split(",");
    }
    if (typeof req.body.Wninetoten !== "undefined") {
      profileFields.Wninetoten = req.body.Wninetoten.split(",");
    }
    if (typeof req.body.Wtentoeleven !== "undefined") {
      profileFields.Wtentoeleven = req.body.Wtentoeleven.split(",");
    }
    if (typeof req.body.Weleventotwelve !== "undefined") {
      profileFields.Weleventotwelve = req.body.Weleventotwelve.split(",");
    }
    if (typeof req.body.Wtwelvetoone !== "undefined") {
      profileFields.Wtwelvetoone = req.body.Wtwelvetoone.split(",");
    }
    if (typeof req.body.Wonetotwo !== "undefined") {
      profileFields.Wonetotwo = req.body.Wonetotwo.split(",");
    }
    if (typeof req.body.Wtwotothree !== "undefined") {
      profileFields.Wtwotothree = req.body.Wtwotothree.split(",");
    }
    if (typeof req.body.Wthreetofour !== "undefined") {
      profileFields.Wthreetofour = req.body.Wthreetofour.split(",");
    }
    if (typeof req.body.Wfourtofive !== "undefined") {
      profileFields.Wfourtofive = req.body.Wfourtofive.split(",");
    }

    if (typeof req.body.THeighttonine !== "undefined") {
      profileFields.THeighttonine = req.body.THeighttonine.split(",");
    }
    if (typeof req.body.THninetoten !== "undefined") {
      profileFields.THninetoten = req.body.THninetoten.split(",");
    }
    if (typeof req.body.THtentoeleven !== "undefined") {
      profileFields.THtentoeleven = req.body.THtentoeleven.split(",");
    }
    if (typeof req.body.THeleventotwelve !== "undefined") {
      profileFields.THeleventotwelve = req.body.THeleventotwelve.split(",");
    }
    if (typeof req.body.THtwelvetoone !== "undefined") {
      profileFields.THtwelvetoone = req.body.THtwelvetoone.split(",");
    }
    if (typeof req.body.THonetotwo !== "undefined") {
      profileFields.THonetotwo = req.body.THonetotwo.split(",");
    }
    if (typeof req.body.THtwotothree !== "undefined") {
      profileFields.THtwotothree = req.body.THtwotothree.split(",");
    }
    if (typeof req.body.THthreetofour !== "undefined") {
      profileFields.THthreetofour = req.body.THthreetofour.split(",");
    }
    if (typeof req.body.THfourtofive !== "undefined") {
      profileFields.THfourtofive = req.body.THfourtofive.split(",");
    }

    if (typeof req.body.Feighttonine !== "undefined") {
      profileFields.Feighttonine = req.body.Feighttonine.split(",");
    }
    if (typeof req.body.Fninetoten !== "undefined") {
      profileFields.Fninetoten = req.body.Fninetoten.split(",");
    }
    if (typeof req.body.Ftentoeleven !== "undefined") {
      profileFields.Ftentoeleven = req.body.Ftentoeleven.split(",");
    }
    if (typeof req.body.Feleventotwelve !== "undefined") {
      profileFields.Feleventotwelve = req.body.Feleventotwelve.split(",");
    }
    if (typeof req.body.Ftwelvetoone !== "undefined") {
      profileFields.Ftwelvetoone = req.body.Ftwelvetoone.split(",");
    }
    if (typeof req.body.Fonetotwo !== "undefined") {
      profileFields.Fonetotwo = req.body.Fonetotwo.split(",");
    }
    if (typeof req.body.Ftwotothree !== "undefined") {
      profileFields.Ftwotothree = req.body.Ftwotothree.split(",");
    }
    if (typeof req.body.Fthreetofour !== "undefined") {
      profileFields.Fthreetofour = req.body.Fthreetofour.split(",");
    }
    if (typeof req.body.Ffourtofive !== "undefined") {
      profileFields.Ffourtofive = req.body.Ffourtofive.split(",");
    }

    // Skills - Split into array

    Nine.findOne().then(nine => {
      if (nine) {
        //update
        Nine.findOneAndUpdate(req.params.nineId,
          { $set: profileFields },
          { new: true }
        ).then(nine => res.json(nine));
      } else {
        //create

        // check if handle exists

        // save Profile
        new Nine(profileFields).save().then(nine => res.json(nine));
      }
    });
  }
);

module.exports = router;
