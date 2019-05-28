const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation

//const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Booking = require("../../models/Booking");


router.get(
  "/",

  (req, res) => {
    const errors = {};

    Booking.findOne()
      .populate("user", ["name", "avatar"])
      .then(Booking => {
        if (!booking) {
          errors.nonine = "There is no Booking from this user";
          return res.status(404).json(errors);
        }
        res.json(nine);
      })
      .catch(err => res.status(404).json(err));
  }
);



// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.hallname) profileFields.hallname = req.body.hallname;
    if (req.body.bookdate) profileFields.bookdate = req.body.bookdate;
    if (req.body.booktime) profileFields.booktime = req.body.booktime;
    if (req.body.reason) profileFields.reason = req.body.reason;
    if (req.body.nameofapplicant) profileFields.nameofapplicant = req.body.nameofapplicant;
    if (req.body.indexnostudent) profileFields.indexnostudent = req.body.indexnostudent;
    if (req.body.teacherid) profileFields.teacherid = req.body.teacherid;
    
    Booking.findOne({ user: req.user.id }).then(booking => {
      if (booking) {
        //update
        booking.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(booking => res.json(booking));
      } else {
        //create

        // check if handle exists
        

          // save Profile
          new Booking(profileFields).save().then(booking => res.json(booking));
       
      }
    });



    
  }
);

module.exports = router;
