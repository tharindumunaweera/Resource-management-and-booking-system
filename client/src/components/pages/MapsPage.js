import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';


const MapsPage =  () =>  {
  return (
    <React.Fragment>
        <MDBRow>
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
         
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header blue darken-2">
                <h4 className="h4-responsive text-white">
                Filter
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
              
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         
        </MDBRow>
    </React.Fragment>
  )
}

export default MapsPage;