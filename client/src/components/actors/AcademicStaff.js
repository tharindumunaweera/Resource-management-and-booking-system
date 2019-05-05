import React from "react";
import Acadamicdashboard from "../dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import src1 from "../../assets/img-1.jpg";
//import Lecturer from '../Tables/Availabilitytable';
import TopNavAcademicstaff from "../topNavAcademicstaff";
import SideNavAcademicstaff from "../sideNavAcademicstaff";
import Navbar from "../layout/Navbar";
import HallSelect from "../HallSelect/HallSelect";
import AvailableLoad from "../commonpages/AvailableLoad";
import Lecturerprofile from "../dashboard/Lecturerprofile/Lecturerprofile";
import Hallregister from "../HallRegister/Hallregister";
import HallList from "../HallRegister/HallList";
import HallEdit from "../HallRegister/HallEdit";

import Dashboard from "../dashboard/Dashboard";
import EditProfile from "../edit-profile/EditProfile";
import CreateBooking from "../create-profile/CreateBooking";
import AddExperience from "../add-credentials/AddExperience";
import AddEducation from "../add-credentials/AddEducation";
import CreateProfile from "../create-profile/CreateProfile";
import TimetableActions from "../timetable/TimetableActions";
import ProfileActions from "../dashboard/ProfileActions";
import Example from "../create-profile/Example";
import CreateNine from "../create-profile/CreateNine";

// import TimeTable from "../timetable/TimeTable";
// import React from "react";
// import Acadamicdashboard from "../dashboard/Dashboard";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import {
//   MDBCard,
//   MDBCol,
//   MDBRow,
//   MDBView,
//   MDBMask,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardFooter,
//   MDBBtn,
//   MDBIcon
// } from "mdbreact";
// import src1 from "../../assets/img-1.jpg";
// //import Lecturer from '../Tables/Availabilitytable';
// import TopNavAcademicstaff from "../topNavAcademicstaff";
// import SideNavAcademicstaff from "../sideNavAcademicstaff";
// import Navbar from "../layout/Navbar";
// import HallSelect from "../HallSelect/HallSelect";
// import AvailableLoad from "../commonpages/AvailableLoad";
// import Lecturerprofile from "../dashboard/Lecturerprofile/Lecturerprofile";

// {/*hall register routs  */}
// import Hallregister from "../HallRegister/Hallregister";
// import HallList from "../HallRegister/HallList";
// import HallEdit from "../HallRegister/HallEdit";

// {/*profile creation routs  */}
// import Dashboard from "../dashboard/Dashboard";
// import EditProfile from "../edit-profile/EditProfile";
// import CreateBooking from "../create-profile/CreateBooking";
// import AddExperience from "../add-credentials/AddExperience";
// import AddEducation from "../add-credentials/AddEducation";
// import CreateProfile from "../create-profile/CreateProfile";
// import TimetableActions from "../timetable/TimetableActions";
// // import TimeTable from "../timetable/TimeTable";

 const Academicstaff = () => {
   return (
     <React.Fragment>
       <Router>
         <div className="flexible-content">
           <TopNavAcademicstaff />

           <SideNavAcademicstaff />
           {/* <Route exact path="/HallRegister" component={HallRegister} /> */}

          <Route exact path="/available" component={AvailableLoad} />
          <Route exact path="/HallSelect" component={HallSelect} />
          <Route exact path="/HallRegister" component={Hallregister} />
          <Route path="/HallEdit/:id" exact component={HallEdit} />
          <Route path="/HallList" exact component={HallList} />
          <Route exact path="/AcademicStaff" component={Lecturerprofile} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/createbooking" component={CreateBooking} />
          <Route exact path="/add-experience" component={AddExperience} />
          <Route exact path="/add-education" component={AddEducation} />
          <Route exact path="/CreateProfile" component={CreateProfile} />
          <Route exact path="/timetableactions" component={TimetableActions}/>
          <Route exact path="/ProfileActions" component={ProfileActions}/>
          <Route exact path="/Example" component={Example}/>
          <Route exact path="/CreateNine" component={CreateNine}/>

          {/* <Route exact path="/time-table" component={TimeTable}/> */}
           <main id="content" className="p-5" />
         </div>
       </Router>
     </React.Fragment>
   );
 };

 export default Academicstaff;
