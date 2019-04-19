import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentTen } from "../../actions/tenActions";
import Spinner from "../common/Spinner";

class Tendashboard extends Component {
  componentDidMount() {
    this.props.getCurrentTen();
  }

  render() {
    const { ten, loading } = this.props.ten;

    let dashboardContent;

    if (ten === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(ten).length > 0) {
        dashboardContent = (
          <div>
            <h4>Begining from 10.00 a.m</h4>
            <Link to="/edit-ten" className="btn btn-lg btn-info">
              Edit or Reshedule time table begining from 10.00 a.m
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
            <Link to="/create-ten" className="btn btn-lg btn-info">
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

Tendashboard.propTypes = {
  getCurrentTen: PropTypes.func.isRequired,

  ten: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ten: state.ten
});

export default connect(
  mapStateToProps,
  { getCurrentTen }
)(Tendashboard);
