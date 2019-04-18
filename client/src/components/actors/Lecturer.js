import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
//import Lecturer from '../Tables/Availabilitytable';
import TopNavLecturer from "../topNavLecturer";
import SideNavLecturer from "../sideNavLecturer";
import HallSelect from "../HallSelect/HallSelect";
import AvailableLoad from "../commonpages/AvailableLoad";

const Lecturer =  () => {
  return (
    <React.Fragment>
         <Router>
        <div className="flexible-content">
            <TopNavLecturer/>
            <SideNavLecturer/>
            <Route exact path="/available" component={AvailableLoad} />
            <Route exact path="/HallSelect" component={HallSelect} />

            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>
   
    </React.Fragment>
  );
}

export default Lecturer;