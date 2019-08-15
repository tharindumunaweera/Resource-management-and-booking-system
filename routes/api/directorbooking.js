const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation

//const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Directorbooking = require("../../models/Directorbooking");


router.get(
    "/",

    (req, res) => {
        const errors = {};

        Directorbooking.findOne()
            .populate("user", ["name", "avatar"])
            .then(directorbooking => {
                if (!directorbooking) {
                    errors.nobooking = "There is no Booking request from any one";
                    return res.status(404).json(errors);
                }
                res.json(directorbooking);
            })
            .catch(err => res.status(404).json(err));
    }
);

router.get("/all", passport.authenticate("jwt", { session: false }), (req, res) => {
    const errors = {};

    Directorbooking.find()
        .populate("user", ["name", "avatar"])
        .then(directorbooking => {
            if (!directorbooking) {
                errors.nobooking = "There are no hall booking request";
                return res.status(404).json(errors);
            }

            res.json(directorbooking);
        })
        .catch(err => res.status(404).json({ Booking: "There are no Bookings " }));
});



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
        if (req.body.acceptance) profileFields.acceptance = req.body.acceptance;

        Directorbooking.findOne({ user: req.user.id }).then(directorbooking => {
            if (directorbooking) {
                //update
                //  booking.findOneAndUpdate(
                //    { user: req.user.id },
                //    { $set: profileFields },
                //    { new: true }
                //  ).then(booking => res.json(booking));
            }

            // save acadsamicbooking  
            new Directorbooking(profileFields).save().then(directorbooking => res.json(directorbooking));


        });




    }
);

module.exports = router;
