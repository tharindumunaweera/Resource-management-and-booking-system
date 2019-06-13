import React, { Component } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Example from "../create-profile/Example";
import { MDBCard, MDBCol, MDBCardHeader, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";


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

                    <div className="row">
                        {/* <div className="col-2">
             <img src={profile.user.avatar} alt="" className="rounded-circle" />
           </div> */}

                        <MDBCol col-lg-8 col-md-5 col-10 className="mb-4 " >
                            <MDBCard className="mb-4  border-primary">
                                <MDBCardHeader>
                                Hall Name:<Link to={{
                                        pathname: './example',
                                        state: {
                                            name: hallreg.hallname,
                                            cal: "tharindu"

                                        }
                                    }}>
                                       <button type="submit" className="btn btn-primary"><strong ><font size="4"> {hallreg.hallname}</font></strong></button>
                                    </Link>
                                </MDBCardHeader>
                                <MDBCardBody>
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


                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

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
