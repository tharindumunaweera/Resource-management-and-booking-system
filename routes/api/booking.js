const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation

const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Booking = require("../../models/Booking");

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors } = validateLoginInput(req.body);

    // const hallname = req.body.hallname;
    // const bookdate = req.body.date;
    // const book = req.body.book;

    // Find user by email
    Booking.findOne({
      hallname: req.body.hallname,
      bookdate: req.body.bookdate
    }).then(booking => {
      // Check for user
      if (booking) {
        errors.bookdate = "This hall is already book in this time";
        return res.status(404).json(errors);
      } else {
        const newBooking = new Booking({
          hallname: req.body.hallname,
          bookdate: req.body.bookdate
          // book: req.body.book
        });
        new Booking(newBooking).save().then(booking => res.json(booking));
      }
    });
  }
);

module.exports = router;
