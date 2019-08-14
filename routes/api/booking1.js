const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Input Validation

//const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");
const Booking1 = require("../../models/Booking1");


router.get(
    "/",

    (req, res) => {
        const errors = {};

        Booking1.findOne()
            .populate("user", ["name", "avatar"])
            .then(booking1 => {
                if (!booking1) {
                    errors.nobooking1 = "There is no Booking from this user";
                    return res.status(404).json(errors);
                }
                res.json(booking1);
            })
            .catch(err => res.status(404).json(err));
    }
);

router.get("/all", passport.authenticate("jwt", { session: false }), (req, res) => {
    const errors = {};

    Booking1.find()
        .populate("user", ["name", "avatar"])
        .then(booking1 => {
            if (!booking1) {
                errors.nobooking1 = "There are no Booking";
                return res.status(404).json(errors);
            }

            res.json(booking1);
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

        Booking1.findOne({ user: req.user.id }).then(booking1 => {
            if (booking1) {
                //update
                //  booking.findOneAndUpdate(
                //    { user: req.user.id },
                //    { $set: profileFields },
                //    { new: true }
                //  ).then(booking => res.json(booking));
            }

            // save Profile
            new Booking1(profileFields).save().then(booking1 => res.json(booking1));


        });



    }
);

router.delete(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Booking1.findOneAndRemove({ _id: req.id }).then(() => {

            res.json({ success: true });

        });
    }
);

module.exports = router;
