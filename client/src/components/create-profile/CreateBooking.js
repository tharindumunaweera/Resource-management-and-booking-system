import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
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
      bookdate: this.state.bookdate
    };

    this.props.createBooking(bookingData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

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
