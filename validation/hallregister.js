const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateHallregisterInput(data) {
    let errors = {};

    data.hallname = !isEmpty(data.hallname) ? data.hallname : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.seat = !isEmpty(data.seat) ? data.seat : "";
    data.projecter = !isEmpty(data.projecter) ? data.projecter : "";
    data.whiteboard = !isEmpty(data.whiteboard) ? data.whiteboard : "";
    data.other = !isEmpty(data.other) ? data.other : "";





    if (Validator.isEmpty(data.hallname)) {
        errors.hallname = "Hall name is required";
    }

    if (Validator.isEmpty(data.location)) {
        errors.location = "Location field is required";
    }

    if (Validator.isEmpty(data.seat)) {
        errors.seat = "Number of seats are required";
    }

    if (Validator.isEmpty(data.projecter)) {
        errors.projecter = "Number of projectors are required";
    }

    if (Validator.isEmpty(data.whiteboard)) {
        errors.whiteboard = "Number of whiteboards are required";
    }

    if (Validator.isEmpty(data.other)) {
        errors.other = "Other Field is  is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
