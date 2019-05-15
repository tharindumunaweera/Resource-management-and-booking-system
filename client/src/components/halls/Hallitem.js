import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class Hallitem extends Component {
    render() {
        const { hallreg } = this.props;

        return (
            <div>
                {hallreg.seat > this.props.seat1 ? (
                    <div className="card card-body bg-light mb-3">
                        <div className="row">
                            {/* <div className="col-2">
             <img src={profile.user.avatar} alt="" className="rounded-circle" />
           </div> */}
                            <div className="col-lg-6 col-md-4 col-8">

                                <div>
                                    <h3>Hall Name: {hallreg.hallname}</h3>
                                    <p>
                                        Location: {hallreg.location}
                                    </p>
                                    <p>
                                        Number of seats: {hallreg.seat}
                                    </p>
                                    <p>
                                        Number of Projectors: {hallreg.projecter}
                                    </p>
                                    <p>
                                        Number of Whiteboards: {hallreg.whiteboard}
                                    </p>
                                </div>


                                {/* <Link to={`/profile/${profile.handle}`} className="btn btn-info">
               View Profile
             </Link> */}
                            </div>

                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

Hallitem.propTypes = {
    hallreg: PropTypes.object.isRequired
};

export default Hallitem;
