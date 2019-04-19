import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentEleven } from "../../actions/elevenActions";
import Spinner from "../common/Spinner";

class Elevendashboard extends Component {
  componentDidMount() {
    this.props.getCurrentEleven();
  }

  render() {
    const { eleven, loading } = this.props.eleven;

    let dashboardContent;

    if (eleven === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(eleven).length > 0) {
        dashboardContent = (
          <div>
            <h4>Begining from 10.00 a.m</h4>
            <Link to="/edit-eleven" className="btn btn-lg btn-info">
              Edit or Reshedule time table begining from 11.00 a.m
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
            <Link to="/create-eleven" className="btn btn-lg btn-info">
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

Elevendashboard.propTypes = {
  getCurrentEleven: PropTypes.func.isRequired,

  eleven: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eleven: state.eleven
});

export default connect(
  mapStateToProps,
  { getCurrentEleven }
)(Elevendashboard);
