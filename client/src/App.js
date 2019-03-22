import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';


import Navbar from "./components/layout/Navbar";
//import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Union from "./components/actors/Union";
import Lecturer from "./components/actors/Lecturer";
import Calender from "./components/Calender/Calender";
import Availabilitytable from "./components/Tables/Availabilitytable";
import BookingForm from "./components/BookingForm/BookingForm";


import "./App.css";


const style = { //this for Calender
  position:"relative",
  margin:"50px auto"
  
}

class App extends Component {
  
  onDayClick = (e ,day) => {
    alert(day);
  }

  render() {
    return (
      <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-5">
        <Routes />
      </main>
      <Footer />
    



      <Router>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/union" component={Union} }  />
                <Route exact path="/Lecturer" component={Lecturer} />
                <Route exact path="/Availabilitytable" component={Availabilitytable } />
                <Route exact path="/BookingForm" component={BookingForm} />
            </div>
            <Calender style= {style} width="302px" onDayClick={(e, day)=> this.onDayClick(e,day)}  />  
            <Footer />
            
        </div>
        
      </Router>
      </div>
      
    );
  }
}

export default App;
