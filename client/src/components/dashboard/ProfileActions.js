import React from "react";
import { Link } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";


const ProfileActions = () => {
  return (
    // <div>

    //   <div className="btn-group mb-4" role="group">

    //     <Link to="/edit-profile" className="btn btn-light">
    //       <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
    //     </Link>
    //     <div style={{ marginLeft: "20px" }} />
    //     <Link to="/add-experience" className="btn btn-light">
    //       <i className="fab fa-black-tie text-info mr-1" />
    //       Add Experience
    //     </Link>
    //     <div style={{ marginLeft: "20px" }} />
    //     <Link to="/add-education" className="btn btn-light">
    //       <i className="fas fa-graduation-cap text-info mr-1" />
    //       Add Education
    //     </Link>

    //     <div style={{ marginLeft: "20px" }} />
    //     <Link to="/timetableactions" className="btn btn-light">
    //       <i className="fas fa-table text-info mr-2" />
    //       Time Table Management
    //     </Link>
    //     <div style={{ marginLeft: "20px" }} />
    //     <Link to="/create-hallreg" className="btn btn-light">
    //       <i className="fas fa-table text-info mr-2" />
    //       hallreg
    //     </Link>
    //   </div>
    // </div>

    <MDBRow className="mb-10">

      <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="fas fa-user-circle mr-1" className="primary-color" />

          </div>
          <MDBCardBody>
            <Link to="/edit-profile" className="btn btn-light"><strong>Edit User Profile</strong> </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="fas fa-user-tie  mr-1" className="warning-color" />

          </div>
          <MDBCardBody>
            <Link to="/add-experience" className="btn btn-light"><strong>Add Experience</strong> </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* <MDBCol xl="4" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="fas fa-table  mr-2" className="light-blue lighten-1" />

          </div>
          <MDBCardBody>
            <Link to="/timetableactions" className="btn btn-light"><strong>Add Education</strong> </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> */}
      {/* <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2"/>
                
              </div>
              <MDBCardBody>
               
              </MDBCardBody>
            </MDBCard>
        </MDBCol> */}
    </MDBRow>
  );
};



export default ProfileActions;
