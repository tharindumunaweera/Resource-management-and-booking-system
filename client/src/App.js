import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/common/PrivateRoute";

import Routes from "../src/components/Routes";

//import Footer from "./components/Footer";
import "./index.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Calender from "./components/Calender/Calender";
import Availabilitytable from "./components/Tables/Availabilitytable";
import BookingForm from "./components/BookingForm/BookingForm";

import Lecturer from "./components/actors/Lecturer";
import AcademicStaff from "./components/actors/AcademicStaff";
import Director from "./components/actors/Director";
import Coordinator from "./components/actors/Coordinator";
import NormalStudent from "./components/actors/NormalStudent";
import UnionStudent from "./components/actors/UnionStudent";

import Dashboard from "./components/dashboard/Dashboard";
import Mundashboard from "./components/timetable/Mundashboard";
import Ninedashboard from "./components/timetable/Ninedashboard";

import CreateProfile from "./components/create-profile/CreateProfile";
import CreateMun from "./components/create-profile/CreateMun";
import CreateNine from "./components/create-profile/CreateNine";

import CreateTha from "./components/create-profile/CreateTha";
import EditProfile from "./components/edit-profile/EditProfile";
import EditMun from "./components/edit-profile/EditMun";
import EditNine from "./components/edit-profile/EditNine";
import EditTha from "./components/edit-profile/EditTha";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEducation";

import TimeTable from "./components/timetable/TimeTable";
import CreateTimetable from "./components/timetable/CreateTimetable";
import TimetableActions from "./components/timetable/TimetableActions";
import Thadashboard from "./components/timetable/Thadashboard";
import Template from "./components/layout/Template";

import "./App.css";

//check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    //  Clear current Profile
    store.dispatch(clearCurrentProfile);
    // Redirect to login
    window.location.href = "/login";
  }
}

const style = {
  //this for Calender
  position: "relative",
  margin: "50px auto"
};

class App extends Component {
  render() {
    return (
      //<Lecturer/>
      //<AcademicStaff/>
      //<Director/>
      //<Coordinator/>
      //<NormalStudent/>
      //<UnionStudent/>

      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />

              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/mundashboard"
                  component={Mundashboard}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/ninedashboard"
                  component={Ninedashboard}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/create-mun" component={CreateMun} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-nine"
                  component={CreateNine}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-mun" component={EditMun} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/edit-nine" component={EditNine} />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
