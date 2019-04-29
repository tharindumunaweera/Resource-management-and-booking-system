// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
// import Spinner from "../common/Spinner";
// import ProfileActions from "./ProfileActions";
// import Experience from "./Experience";

// class Dashboard extends Component {
//   componentDidMount() {
//     this.props.getCurrentProfile();
//   }

//   onDeleteClick(e) {
//     this.props.deleteAccount();
//   }

//   render() {
//     const { user } = this.props.auth;
//     const { profile, loading } = this.props.profile;

//     let dashboardContent;

//     if (profile === null || loading) {
//       dashboardContent = <Spinner />;
//     } else {
//       // check if log in user has profile data
//       if (Object.keys(profile).length > 0) {
//         dashboardContent = (
//           <div>
//             <p className="lead text-muted">
//               Welcome{" "}
//               <Link to={`/profile/${profile.handle}`} className="text-primary">
//                 {" "}
//                 {user.name}
//               </Link>
//             </p>
//             <ProfileActions />
//             <Experience experience={profile.experience} />
//             <div style={{ marginBottom: "60px" }} />
//             <button
//               onClick={this.onDeleteClick.bind(this)}
//               className="btn btn-danger"
//             >
//               Delete My Account
//             </button>
//           </div>
//         );
//       } else {
//         // User is logged in but has no profile
//         dashboardContent = (
//           <div>
//             <p className="lead text-muted">Welcome {user.name}</p>
//             <p>You have not yet setup a profile, please add some info</p>
//             <Link to="/create-profile" className="btn btn-lg btn-info">
//               Create Profile
//             </Link>
//           </div>
//         );
//       }
//     }

//     return (
//       <div className="dashboard">
//         <div className="container">
//           <div className="row">
//             <div class="col-sm-3" />
//             <div className="col-sm-8">
//               <h1 className="display-4">Dashboard</h1>
//               {dashboardContent}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   profile: state.profile,
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { getCurrentProfile, deleteAccount }
// )(Dashboard);
import React from "react";
import Acadamicdashboard from "../dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
//import Lecturer from '../Tables/Availabilitytable';
import TopNavAcademicstaff from "../topNavAcademicstaff";
import SideNavAcademicstaff from "../sideNavAcademicstaff";
import Navbar from "../layout/Navbar";
import HallSelect from "../HallSelect/HallSelect";
import AvailableLoad from "../commonpages/AvailableLoad";
import Hallregister from "../HallRegister/Hallregister";
import HallList from "../HallRegister/HallList";
import HallEdit from "../HallRegister/HallEdit";
import Lecturerprofile from "../dashboard/Lecturerprofile/Lecturerprofile"

const Academicstaff = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="flexible-content">
          <TopNavAcademicstaff />
          <Acadamicdashboard />
          <SideNavAcademicstaff />
          {/* <Route exact path="/HallRegister" component={HallRegister} /> */}
         
          <Route exact path="/available" component={AvailableLoad} />
          <Route exact path="/HallSelect" component={HallSelect} />
          <Route exact path="/HallRegister" component={Hallregister} />
          <Route path="/HallEdit/:id" exact component={HallEdit} />
          <Route path="/HallList" exact component={HallList} />
          <Route exact path="/Lecturerprofile" component={Lecturerprofile} />

          <main id="content" className="p-5" />
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Academicstaff;
