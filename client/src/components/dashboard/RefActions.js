import React from "react";
import { Link } from "react-router-dom";

const RefActions = () => {
    return (
        <div>

            <div className="btn-group mb-4" role="group">

                <Link to="/edit-profile" className="btn btn-light">
                    <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
        </Link>
                <div style={{ marginLeft: "20px" }} />
                <Link to="/add-experience" className="btn btn-light">
                    <i className="fab fa-black-tie text-info mr-1" />
                    Add Experience
        </Link>
                <div style={{ marginLeft: "20px" }} />
                <Link to="/add-education" className="btn btn-light">
                    <i className="fas fa-graduation-cap text-info mr-1" />
                    Add Education
        </Link>



                <div style={{ marginLeft: "20px" }} />
                <Link to="/createbooking" className="btn btn-light">
                    <i className="fas fa-table text-info mr-2" />
                    Booking
        </Link>
                <div style={{ marginLeft: "20px" }} />
                {/* <Link to="/example" className="btn btn-light">
                    <i className="fas fa-table text-info mr-2" />
                    Example
        </Link> */}
                <Link to="/handle" className="btn btn-success">
                    <i className="fas fa-table text-info mr-2" />
                    ALL hALLS
        </Link>
                <div style={{ marginLeft: "20px" }} />
                <Link to="/create-hallreg" className="btn btn-light">
                    <i className="fas fa-table text-info mr-2" />
                    hallreg
        </Link>
            </div>
        </div>
    );
};



export default RefActions;
