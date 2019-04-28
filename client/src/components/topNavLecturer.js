import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBIcon
} from "mdbreact";


import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileActions";

class TopNavLecturer extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {user.role === "Ref" ? (
            <Link className="nav-link" to="/refdashboard">
              Ref Dashboard
            </Link>
          ) : null}

          {user.role === "Acadamic" ? (
            <Link className="nav-link" to="/dashboard">
              Acadamic Dashboard
            </Link>
          ) : null}
          {user.role === "Lecturer" ? (
            <Link className="nav-link" to="/lecdashboard">
              Lecurer Dashboard
            </Link>
          ) : null}
          {user.role === "Coordinator" ? (
            <Link className="nav-link" to="/coordashboard">
              Coordinator Dashboard
            </Link>
          ) : null}

          {user.role === "Director" ? (
            <Link className="nav-link" to="/coordashboard">
              Director Dashboard
            </Link>
          ) : null}
          {/* <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link> */}
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5 PX" }}
              title="You must have a Gravatar connected to ypur email to dispaly image"
            />{" "}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <strong>Sign Up</strong>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <strong>Sign In</strong>
          </Link>
        </li>
      </ul>
    );

    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>Lecturer</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBRow>
            <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                target="_blank"
            >
              <i className="far fa-bell"></i>
            </a>
           
            <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                target="_blank"
            >
              Logout
            </a>
              </MDBRow>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavLecturer;
