const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation

//const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Acadamicbooking = require("../../models/Acadamicbooking");


router.get(
    "/",

    (req, res) => {
        const errors = {};

        Acadamicbooking.findOne()
            .populate("user", ["name", "avatar"])
            .then(acadamicbooking => {
                if (!acadamicbooking) {
                    errors.nobooking = "There is no Booking from this user";
                    return res.status(404).json(errors);
                }
                res.json(acadamicbooking);
            })
            .catch(err => res.status(404).json(err));
    }
);

router.get("/all", passport.authenticate("jwt", { session: false }), (req, res) => {
    const errors = {};

    AcadamicBooking.find()
        .populate("user", ["name", "avatar"])
        .then(acadamicbooking => {
            if (!acadamicbooking) {
                errors.nobooking = "There are no Booking";
                return res.status(404).json(errors);
            }

            res.json(acadamicbooking);
        })
        .catch(err => res.status(404).json({ Booking: "There are no Booking " }));
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
        if (req.body.recommend) profileFields.recommend = req.body.recommend;

        Acadamicbooking.findOne({ user: req.user.id }).then(acadamicbooking => {
            if (acadamicbooking) {
                //update
                //  booking.findOneAndUpdate(
                //    { user: req.user.id },
                //    { $set: profileFields },
                //    { new: true }
                //  ).then(booking => res.json(booking));
            }

            // save acadsamicbooking  
            new Acadamicbooking(profileFields).save().then(acadamicbooking => res.json(acadamicbooking));


        });




    }
);

module.exports = router;
