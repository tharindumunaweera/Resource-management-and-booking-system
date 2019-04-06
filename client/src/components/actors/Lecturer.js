import React, { Component } from "react";
import {
  MDBCard,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBIcon
} from "mdbreact";

import Calender from "../Calender/Calender";


const style = {
  //this for Calender
  position: "relative",
  margin: "20px auto"
};

class Lecturer extends Component {
  
  onDayClick = (e ,day) => {
    alert("The Day You Select Is : " + day);
  }

  render(){
  return (
    
      <MDBRow>
        <div className="col-sm-3 " />
        <div className="col-sm-6 ">
          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">Calender</h4>
              </MDBView>
              <MDBCardBody
                style={{ width: "100%", height: "300px" }}
                className="text-center">
                <Calender style= {style} width="320px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />

              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="8">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-2">
                <h4 className="h4-responsive text-white">Available Seats</h4>
              </MDBView>
              <MDBCardBody
                style={{ width: "100%", height: "400px" }}
                className="text-center"
              >
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item">
                      
                    <div className="form__group">
                   <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" />
                   <label for="macLab" className="form__label form__label--inline">Less Than 100</label>
                     </div>
                    </li>
                    <li className="list-group-item">
                     
                      <div className="form__group">
                   <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" />
                   <label for="macLab" className="form__label form__label--inline">100    -    200</label>
                     </div>
                     
                    </li>
                    <li className="list-group-item">
                      
                    <div className="form__group">
                   <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" />
                   <label for="macLab" className="form__label form__label--inline">200    -    300</label>
                     </div>
                    </li>
                    <li className="list-group-item">
                      
                    <div className="form__group">
                   <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" />
                   <label for="macLab" className="form__label form__label--inline">300    -    400</label>
                     </div>
                    </li>
                    <li className="list-group-item">
                       
                    <div className="form__group">
                   <input type="checkbox" id="macLab" name="macLab" className="form__input--checkbox" />
                   <label for="macLab" className="form__label form__label--inline">Greater than 400</label>
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
   
  );
};
}

export default Lecturer;
