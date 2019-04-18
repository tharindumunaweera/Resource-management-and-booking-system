import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentMun } from "../../actions/munActions";
import Spinner from "../common/Spinner";

class Mundashboard extends Component {
  componentDidMount() {
    this.props.getCurrentMun();
  }

  render() {
    const { mun, loading } = this.props.mun;

    let dashboardContent;

    if (mun === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(mun).length > 0) {
        dashboardContent = (
          <div>
            <h4>welcome this</h4>
            <Link to="/edit-mun" className="btn btn-lg btn-info">
              Edit or Reshedule time table begining from 08.00 a.m
            </Link>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-mun" className="btn btn-lg btn-info">
              Create Mun
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12 text-right">gsggys</div>
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Mundashboard.propTypes = {
  getCurrentMun: PropTypes.func.isRequired,

  mun: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mun: state.mun
});

export default connect(
  mapStateToProps,
  { getCurrentMun }
)(Mundashboard);
