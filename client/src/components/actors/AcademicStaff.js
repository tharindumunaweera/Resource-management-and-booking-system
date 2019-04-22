import React from 'react'
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
//import Lecturer from '../Tables/Availabilitytable';
import TopNavAcademicstaff from "../topNavAcademicstaff";
import SideNavAcademicstaff from "../sideNavAcademicstaff";
import HallSelect from "../HallSelect/HallSelect";
import AvailableLoad from "../commonpages/AvailableLoad";
import Hallregister from "../HallRegister/Hallregister";
import HallList from "../HallRegister/HallList";
import HallEdit from "../HallRegister/HallEdit";


const Academicstaff =  () => {
  return (
    <React.Fragment>
         <Router>
        <div className="flexible-content">
            <TopNavAcademicstaff/>
            <SideNavAcademicstaff/>
            <Route exact path="/available" component={AvailableLoad} />
            <Route exact path="/HallSelect" component={HallSelect} />
            <Route exact path="/Hallregister" component={Hallregister} />
            <Route path="/HallEdit" exact component = {HallEdit} />
            <Route path="/HallList" exact component = {HallList} />

            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>
   
    </React.Fragment>
  );
}

export default Academicstaff;