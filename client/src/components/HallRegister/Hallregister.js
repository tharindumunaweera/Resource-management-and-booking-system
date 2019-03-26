import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';

const HallRegister =  () => {
  return (
    <React.Fragment>
         
      <MDBRow>
      <div className="col-sm-4 " />
      <div className="col-sm-7 ">
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-0">
            <h4 className="h4-responsive text-white">Hall Register form</h4>
          </MDBView>
          <MDBCardBody>
            <form>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Hall Name</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="Hall Name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Location</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword" placeholder="Location"/>
                    </div>
                </div>
                <div>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Number Of Seats</option>
                    <option value="1">Less than 100</option>
                    <option value="2">100  -  200</option>
                    <option value="3">200  -  300</option>
                    <option value="3">300  -  400</option>
                    <option value="3">Greater than 400 </option>
                </select>
                </div>
                <div>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Number Of Projecters</option>
                    <option value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                </select>
                </div>
                <div>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Number White Boards</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                </select>
                </div>
            </form>
           
         </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
    </MDBRow>
    

    </React.Fragment>
  );
}

export default HallRegister;