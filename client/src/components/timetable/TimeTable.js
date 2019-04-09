import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentTimetable } from "../../actions/timetableActions";
import Spinner from "../common/Spinner";

class TimeTable extends Component {
  componentDidMount() {
    this.props.getCurrentTimetable();
  }

  render() {
    const { timetable, loading } = this.props.timetable;

    let dashboardContent;

    if (timetable === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // check if log in user has profile data
      if (Object.keys(timetable).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome</p>
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
            <Link to="/create-timetable" className="btn btn-lg btn-info">
              Create Timetable
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

TimeTable.propTypes = {
  getCurrentTimetable: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  timetable: state.timetable,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentTimetable }
)(TimeTable);
