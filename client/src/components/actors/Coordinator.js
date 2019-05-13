import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
//import Lecturer from '../Tables/Availabilitytable';
import TopNavCoordinator from "../topNavCoordinator";
import SideNavCoordinator from "../sideNavCoordinator";
import Lecturerprofile from "../dashboard/Lecturerprofile/Lecturerprofile"
import Dashboard from "../dashboard/Dashboard";
import EditProfile from "../edit-profile/EditProfile";
import CreateBooking from "../create-profile/CreateBooking";
import AddExperience from "../add-credentials/AddExperience";
import AddEducation from "../add-credentials/AddEducation";
import CreateProfile from "../create-profile/CreateProfile";
import TimetableActions from "../timetable/TimetableActions";
import ViewHallList from "../HallRegister/ViewHallList";


const Coordinator =  () => {
  return (
    <React.Fragment>
         <Router>
        <div className="flexible-content">
            <TopNavCoordinator/>
            <SideNavCoordinator/>

            <Route exact path="/Coordinator" component={Lecturerprofile} />

            {/*profile creation routs  */}
            <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/createbooking" component={CreateBooking} />
          <Route exact path="/add-experience" component={AddExperience} />
          <Route exact path="/add-education" component={AddEducation} />
          <Route exact path="/CreateProfile" component={CreateProfile} />
          <Route exact path="/timetableactions" component={TimetableActions}/>
          <Route exact path="/ViewHallList" component={ViewHallList}/>
            

            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>
   
    </React.Fragment>
  );
}

export default Coordinator;