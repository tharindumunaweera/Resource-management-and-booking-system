import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBooking } from "../../actions/bookingActions";

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hallname: "",
      bookdate: "",
      starttime: "",
      endtime: "",
      reason: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const bookingData = {
      hallname: this.state.hallname,
      bookdate: this.state.bookdate,
      starttime: this.state.starttime,
      endtime: this.state.endtime,
      reason: this.state.reason
    };

    this.props.createBooking(bookingData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    const options1 = [
      { label: "* Select Start time", value: 0 },
      { label: "08:00 a.m", value: "08:00 a.m" },
      { label: "09:00 a.m", value: "09:00 a.m" },
      { label: "10:00 a.m", value: "10:00 a.m" },
      { label: "11.00 a.m", value: "11.00 a.m" },
      { label: "12:00 p.m", value: "12:00 p.m" },
      { label: "01:00 p.m", value: "01:00 p.m" },
      { label: "03:00 p.m", value: "03:00 p.m" },
      { label: "04:00 p.m", value: "04:00 p.m" },
      { label: "05:00 p.m", value: "05:00 p.m" }
    ];

    const options2 = [
      { label: "* Select End time", value: 0 },
      { label: "09:00 a.m", value: "09:00 a.m" },
      { label: "10:00 a.m", value: "10:00 a.m" },
      { label: "11.00 a.m", value: "11.00 a.m" },
      { label: "12:00 p.m", value: "12:00 p.m" },
      { label: "01:00 p.m", value: "01:00 p.m" },
      { label: "03:00 p.m", value: "03:00 p.m" },
      { label: "04:00 p.m", value: "04:00 p.m" },
      { label: "05:00 p.m", value: "05:00 p.m" }
    ];

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div class="col-sm-3" />
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Bokking</h1>
              <p className="lead text-center">
                Add any job or exprience that you had past or current
              </p>

              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Hall name"
                  name="hallname"
                  value={this.state.hallname}
                  onChange={this.onChange}
                />

                <h6>Book Date</h6>
                <TextFieldGroup
                  name="bookdate"
                  type="date"
                  value={this.state.bookdate}
                  onChange={this.onChange}
                  error={errors.bookdate}
                />

                <SelectListGroup
                  placeholder="start time"
                  name="starttime"
                  value={this.state.starttime}
                  onChange={this.onChange}
                  options={options1}
                />
                <SelectListGroup
                  placeholder="end time"
                  name="endtime"
                  value={this.state.endtime}
                  onChange={this.onChange}
                  options={options2}
                />
                <TextAreaFieldGroup
                  placeholder="Reason"
                  name="reason"
                  value={this.state.reason}
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateBooking.propTypes = {
  createBooking: PropTypes.func.isRequired,
  Booking: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createBooking }
)(withRouter(CreateBooking));
