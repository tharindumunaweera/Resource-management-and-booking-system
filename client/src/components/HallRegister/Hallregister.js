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
          <MDBView className="gradient-card-header black darken-0">
            <h4 className="h4-responsive text-white"><strong>Hall Registration Form</strong></h4>
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

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Number Of Seats</label>
                    <div class="col-sm-10">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" maxlength="8">
                      <option selected>Number Of Seats</option>
                      <option value="1">Less than 100</option>
                      <option value="2">100  -  200</option>
                      <option value="3">200  -  300</option>
                      <option value="3">300  -  400</option>
                      <option value="3">Greater than 400 </option>
                  </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Projecters</label>
                    <div class="col-sm-10">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Number Of Projecters</option>
                        <option value="1">0</option>
                        <option value="2">1</option>
                        <option value="3">2</option>
                        <option value="3">3</option>
                    </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">White Boards</label>
                    <div class="col-sm-10">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Number White Boards</option>
                      <option value="2">1</option>
                      <option value="3">2</option>
                    </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Other Resources</label>
                    <div class="col-sm-10">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Other Resources </option>
                      <option value="2"></option>
                      <option value="3"></option>
                    </select>
                    </div>
                </div>

                
                <div class="card text-right"  >
                    <button type="button" class="btn btn-primary"><strong>Submit</strong></button>
                </div>

                <div class="card text-right"  >
                    <button type="button" class="btn btn-success"><strong>Edit Form</strong></button>
                </div>

                <div class="card text-right"  >
                    <button type="button" class="btn btn-danger"><strong>Delete Hall</strong></button>
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