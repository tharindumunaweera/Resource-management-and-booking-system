const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Nine = require("../../models/Nine");
//Load User Model
const User = require("../../models/User");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Nine.findOne({ user: req.user.id })
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

    // Skills - Split into array

    Nine.findOne({ user: req.user.id }).then(nine => {
      if (nine) {
        //update
        Nine.findOneAndUpdate(
          { user: req.user.id },
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
