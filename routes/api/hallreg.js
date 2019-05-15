const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");


const User = require("../../models/User");
const Hallreg = require("../../models/Hallreg");

const validaterHallregisterInput = require("../../validation/hallregister");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Hallreg.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(hallreg => {
        if (!hallreg) {
          errors.nohallreg = "There is no hall reg for  this user";
          return res.status(404).json(errors);
        }
        res.json(hallreg);
      })
      .catch(err => res.status(404).json(err));
  }
);


router.get("/all", passport.authenticate("jwt", { session: false }), (req, res) => {
  const errors = {};

  Hallreg.find()
    .populate("user", ["name", "avatar"])
    .then(hallregs => {
      if (!hallregs) {
        errors.nohallreg = "There are no halls";
        return res.status(404).json(errors);
      }

      res.json(hallregs);
    })
    .catch(err => res.status(404).json({ Profile: "There are no halls " }));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validaterHallregisterInput(req.body);

    // //Check validation
    // if (!isValid) {
    //   //Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }


    //Get fields
    const profileFields = {};

    if (req.body.hallname) profileFields.hallname = req.body.hallname;

    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.seat) profileFields.seat = req.body.seat;
    if (req.body.projecter) profileFields.projecter = req.body.projecter;
    if (req.body.whiteboard) profileFields.whiteboard = req.body.whiteboard;
    if (req.body.other) profileFields.other = req.body.other;


    Hallreg.findOne({ user: req.user.id }).then(hallreg => {
      if (hallreg) {
        //update
        Hallreg.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(hallreg => res.json(hallreg));
      } else {
        //create



        // save Profile
        new Hallreg(profileFields).save().then(hallreg => res.json(hallreg));

      }
    });
  }
);


module.exports = router;