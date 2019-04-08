import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../Routes";
import SideNavigation from "../sideNavLecturer";
import TopNavigation from "../topNavLecturer";

//import Footer from "./components/Footer";
//import './index.css';



const Template = () => {
  return (
    <Router>
      <div className="flexible-content">
          {/* <TopNavigation /> */}
          <SideNavigation />

          <main id="content" className="p-5">
            <Routes />
          </main>
      </div>
    </Router>

  );
};

export default Template;
