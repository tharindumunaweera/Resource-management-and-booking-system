import React, { Component } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Example from "../create-profile/Example";

class Hallitem extends Component {
    // constructor(props) {
    //     super(props);


    //     // this.onHandle = this.onHandle.bind(this);
    // }

    // onHandle() {
    //     let ren;
    //     ren = (
    //         <div>
    //             <Example name="tharindu" />
    //         </div>
    //     )
    // }

    render() {
        const { hallreg } = this.props;

        return (
            <div>
                {(this.props.seat1 <= hallreg.seat) && (hallreg.seat < this.props.seat2) ? (
                    <div className="card card-body bg-light mb-3">
                        <div className="row">
                            {/* <div className="col-2">
             <img src={profile.user.avatar} alt="" className="rounded-circle" />
           </div> */}
                            <div className="col-lg-8 col-md-5 col-10">

                                <div>
                                    <Link to={{
                                        pathname: './available',
                                        state: {
                                            name: hallreg.hallname
                                        }
                                    }}>
                                        <h3>Hall Name:<strong> {hallreg.hallname}</strong> </h3>
                                    </Link>

                                    {/* <button
                                        type="button"
                                        onClick={this.onHandle}


                                        className="btn btn-light"np
                                    >
                                        Add Social Network Links
                                        </button> */}
                                    <p>
                                        Number of seats: <strong> {hallreg.seat}</strong>
                                    </p>
                                    <p>
                                        Location: <strong> {hallreg.location}</strong>
                                    </p>
                                    <p>
                                        Number of Projectors:  <strong>{hallreg.projecter}</strong>
                                    </p>
                                    <p>
                                        Number of Whiteboards: <strong> {hallreg.whiteboard}</strong>
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
