const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Mun = require("../../models/Mun");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Mun.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(mun => {
        if (!mun) {
          errors.nomun = "There is no profile for  this user";
          return res.status(404).json(errors);
        }
        res.json(mun);
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
    // Skills - Split into array

    Mun.findOne({ user: req.user.id }).then(mun => {
      if (mun) {
        //update
        Mun.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(mun => res.json(mun));
      } else {
        //create

        // check if handle exists

        // save Profile
        new Mun(profileFields).save().then(mun => res.json(mun));
      }
    });
  }
);

module.exports = router;
