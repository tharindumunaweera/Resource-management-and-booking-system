import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  <strong>Resource Management And Information System</strong>
                </h1>
                <p className="lead"> Most Convienient Way For Booking</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Landing;
