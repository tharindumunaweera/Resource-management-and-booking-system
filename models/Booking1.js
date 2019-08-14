const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookingSchema1 = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },

    hallname: {
        type: String
    },
    bookdate: {
        type: String
    },
    booktime: {
        type: String
    },
    reason: {
        type: String
    },
    nameofapplicant: {
        type: String
    },
    indexnostudent: {
        type: String
    },
    teacherid: {
        type: String
    },


    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Booking1 = mongoose.model("booking1", BookingSchema1);

