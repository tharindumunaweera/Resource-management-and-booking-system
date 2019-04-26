<<<<<<< HEAD
import React from "react";
import Acadamicdashboard from "../dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import src1 from "../../assets/img-1.jpg";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
>>>>>>> 4778dd75b403bb13a5b8fd4b9159a22aa85b54aa
//import Lecturer from '../Tables/Availabilitytable';
import TopNavAcademicstaff from "../topNavAcademicstaff";
import SideNavAcademicstaff from "../sideNavAcademicstaff";
import Navbar from "../layout/Navbar";
import HallSelect from "../HallSelect/HallSelect";
import AvailableLoad from "../commonpages/AvailableLoad";
import Hallregister from "../HallRegister/Hallregister";
import HallList from "../HallRegister/HallList";
import HallEdit from "../HallRegister/HallEdit";

const Academicstaff = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="flexible-content">
<<<<<<< HEAD
          <TopNavAcademicstaff />
          <Acadamicdashboard />
          <SideNavAcademicstaff />
          <TopNavAcademicstaff />
          <SideNavAcademicstaff />
          <Route exact path="/available" component={AvailableLoad} />
          <Route exact path="/HallSelect" component={HallSelect} />
          {/* <Route exact path="/Hallregister" component={Hallregister} /> */}
          <Route path="/HallEdit/:id" exact component={HallEdit} />
          <Route path="/HallList" exact component={HallList} />

          <Route exact path="/available" component={AvailableLoad} />
          <Route exact path="/HallSelect" component={HallSelect} />
          {/* <Route exact path="/HallRegister" component={HallRegister} /> */}
=======
            <TopNavAcademicstaff/>
            <SideNavAcademicstaff/>
            <Route exact path="/available" component={AvailableLoad} />
            <Route exact path="/HallSelect" component={HallSelect} />
            <Route exact path="/HallRegister" component={Hallregister} />
            <Route path="/HallEdit/:id" exact component = {HallEdit} />
            <Route path="/HallList" exact component = {HallList} />
>>>>>>> 4778dd75b403bb13a5b8fd4b9159a22aa85b54aa

          <main id="content" className="p-5" />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Academicstaff;
