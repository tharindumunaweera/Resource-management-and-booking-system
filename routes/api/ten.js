const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Ten = require("../../models/Ten");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Ten.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(ten => {
        if (!ten) {
          errors.noten = "There is no profile for  this user";
          return res.status(404).json(errors);
        }
        res.json(ten);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Check validation

    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

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

    // Skills - Split into array

    Ten.findOne({ user: req.user.id }).then(ten => {
      if (ten) {
        //update
        Ten.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(ten => res.json(ten));
      } else {
        //create

        // check if handle exists

        // save Profile
        new Ten(profileFields).save().then(ten => res.json(ten));
      }
    });
  }
);

module.exports = router;
