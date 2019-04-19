import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentNine } from "../../actions/nineActions";
import Spinner from "../common/Spinner";

class Ninedashboard extends Component {
  componentDidMount() {
    this.props.getCurrentNine();
  }

  render() {
    const { nine, loading } = this.props.nine;

    let dashboardContent;

    if (nine === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(nine).length > 0) {
        dashboardContent = (
          <div>
            <h4>Begining from 09.00 a.m</h4>
            <Link to="/edit-nine" className="btn btn-lg btn-info">
              Edit or Reshedule time table begining from 09.00 a.m
            </Link>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p>
              You have not yet setup a time table begining fron 09.00 a.m,
              please add some info
            </p>
            <Link to="/create-nine" className="btn btn-lg btn-info">
              Create Nine
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

Ninedashboard.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,

  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine
});

export default connect(
  mapStateToProps,
  { getCurrentNine }
)(Ninedashboard);
