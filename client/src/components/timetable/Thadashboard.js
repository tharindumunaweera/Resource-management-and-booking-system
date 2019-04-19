import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentTha } from "../../actions/thaActions";
import Spinner from "../common/Spinner";

class Thadashboard extends Component {
  componentDidMount() {
    this.props.getCurrentTha();
  }

  render() {
    const { tha, loading } = this.props.tha;

    let dashboardContent;

    if (tha === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(tha).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">jekekkej</p>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome</p>
            <p>
              You have not yet setup a Time table, please add add time table
            </p>
            <Link to="/tha" className="btn btn-lg btn-info">
              Create Timetable
            </Link>
            <Link to="/edittha" className="btn btn-lg btn-info">
              Edit Timetable
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
              {/* <div className="col-md-12 text-right">gsggys</div> */}
              <h1 className="display-4">Manage Time Table</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Thadashboard.propTypes = {
  getCurrentTha: PropTypes.func.isRequired,
  tha: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tha: state.tha
});

export default connect(
  mapStateToProps,
  { getCurrentTha }
)(Thadashboard);
