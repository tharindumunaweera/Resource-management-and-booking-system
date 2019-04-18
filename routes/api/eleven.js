const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const eleven = require("../../models/eleven");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Eleven.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(eleven => {
        if (!eleven) {
          errors.noeleven = "There is no profile for  this user";
          return res.status(404).json(errors);
        }
        res.json(eleven);
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

    // Skills - Split into array

    Eleven.findOne({ user: req.user.id }).then(eleven => {
      if (eleven) {
        //update
        Eleven.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(ten => res.json(eleven));
      } else {
        //create

        // check if handle exists

        // save Profile
        new Eleven(profileFields).save().then(eleven => res.json(eleven));
      }
    });
  }
);

module.exports = router;
