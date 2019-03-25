import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import Calender from "../Calender/Calender";

const Lecturer =  () => {
  return (
    <React.Fragment>

          <MDBRow >
          <div className="col-sm-3 " ></div>
          <div className="col-sm-6 " >
          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">
                  Calender
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
              <Calender/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
       

          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">
                  Available Seats
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '300px'}} className="text-center">
          <div className="col-md-12">
           
            <ul className="list-group">
              <li className="list-group-item">
                <div class="custom-control custom-radio" style={{align :'left'}}>
                  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                    <label class="custom-control-label" for="defaultUnchecked">Less than 100</label>
                </div>
              </li>
              <li className="list-group-item">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
                    <label class="custom-control-label" for="defaultUnchecked">100 - 200</label>
                </div>
              </li>
              <li className="list-group-item">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                    <label class="custom-control-label" for="defaultUnchecked">200 - 300</label>
                </div>
              </li>
              <li className="list-group-item">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                    <label class="custom-control-label" for="defaultUnchecked">300 - 400</label>
                </div>
              </li>
              <li className="list-group-item">
                <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                    <label class="custom-control-label" for="defaultUnchecked">Greater than 400</label>
                </div>
              </li>
            </ul>
            <br />
           
          </div>
         
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </div>
          </MDBRow>


    </React.Fragment>
    
  );
}

export default Lecturer;