import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";



class Navbar extends Component {
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
<<<<<<< HEAD
            <div>
              <Link className="nav-link" to="/refdashboard">
                Ref Dashboard
            </Link>
              <Link className="nav-link" to="/register">
                Register component
=======
            <Link className="nav-link" to="/refdashboard">
              {/* Ref Dashboard */}
>>>>>>> 49e6e40d06327c025812d6e3b10b13811daa4f18
            </Link>
            </div>
          ) : null}

          {user.role === "Acadamic" ? (
            <Link className="nav-link" to="/dashboard">
              {/* Acadamic Dashboard */}
            </Link>
          ) : null}

          {user.role === "Lecturer" ? (
            <Link className="nav-link" to="/lecdashboard">
              {/* Lecurer Dashboard */}
            </Link>
          ) : null}

          {user.role === "Coordinator" ? (
            <Link className="nav-link" to="/coordashboard">
              {/* Coordinator Dashboard */}
            </Link>
          ) : null}

          {user.role === "Director" ? (
            <Link className="nav-link" to="/coordashboard">
              {/* Director Dashboard */}
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
            {/* <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5 PX" }}
              title="You must have a Gravatar connected to ypur email to dispaly image"
            />{" "}
<<<<<<< HEAD
            Logout
=======
             Logout  */}
>>>>>>> 49e6e40d06327c025812d6e3b10b13811daa4f18
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* <Link className="nav-link" to="/register">
            <strong>Sign Up</strong>
          </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/login">
            <strong>Sign In</strong>
          </Link> */}
        </li>
      </ul>
    );

    return (
      <div style={{ marginLeft: "0px" }}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 ">
          <div className="col-sm-2" />
          <div className="container" >
            <div className="col-sm-1" />
            <Link className="navbar-brand" to="/" >
              <strong> RM&IS </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
<<<<<<< HEAD
                  <Link className="nav-link" to="/profiles">
                    {" "}
                    Profiles
                  </Link>
=======
                   {/* <Link className="nav-link" to="/profiles">
                    {" "}
                     Profiles 
                  </Link>  */}
>>>>>>> 49e6e40d06327c025812d6e3b10b13811daa4f18
                </li>
              </ul>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
