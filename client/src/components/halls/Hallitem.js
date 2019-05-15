import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class Hallitem extends Component {
    render() {
        const { hallreg } = this.props;

        return (
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    {/* <div className="col-2">
             <img src={profile.user.avatar} alt="" className="rounded-circle" />
           </div> */}
                    <div className="col-lg-6 col-md-4 col-8">
                        {hallreg.seat >= this.props.seat1 ? (
                            <div>
                                <h3>{hallreg.hallname}</h3>
                                <p>
                                    {hallreg.location}
                                </p>
                                <p>
                                    {hallreg.seat}
                                </p>
                                <p>
                                    {hallreg.projecter}
                                </p>
                                <p>
                                    {hallreg.whiteboard}
                                </p>
                            </div>
                        ) : null}

                        {/* <Link to={`/profile/${profile.handle}`} className="btn btn-info">
               View Profile
             </Link> */}
                    </div>

                </div>
            </div>
        );
    }
}

Hallitem.propTypes = {
    hallreg: PropTypes.object.isRequired
};

export default Hallitem;
