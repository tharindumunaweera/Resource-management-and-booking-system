import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Union from "./components/actors/Union";
import Lecturer from "./components/actors/Lecturer";
import Calender from "./components/Calender/Calender";

import "./App.css";


const style = { //this for Calender
  position:"relative",
  margin:"50px auto"
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/union" component={Union} />
            <Route exact path="/Lecturer" component={Lecturer} />
            <Route exact path="/Calender" style= {style} width="302px  " component={Calender} />
          
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
