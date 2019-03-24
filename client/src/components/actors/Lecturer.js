import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';


const Lecturer =  () => {
  return (
    <React.Fragment>
    
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                  Calender
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
       

    </React.Fragment>
    
  );
}

export default Lecturer;