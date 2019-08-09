import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getBookings } from "../../actions/bookingActions";
import Allbookingitem from "./allbookingitem";




class allbookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: "tharindu"
    };
  }
  componentDidMount() {
    this.props.getBookings();
  }

  render() {
    
    const { bookings, loading } = this.props.booking;
    let bookingItems;

    if (bookings === null || loading) {
      bookingItems = <Spinner />;
    } else {
      if (bookings.length > 0) {
        bookingItems = bookings.map(booking => (
          <Allbookingitem key={booking._id} booking={booking} />
        ));
      } else {
        bookingItems = <h4>No profiles found...</h4>;
      }
    }







    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer profile</h1>
              <p className="lead text-center">
                Browse and connect with profiles
                </p>
              {bookingItems}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

allbookings.propTypes = {
  getBookings: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking
});

export default connect(
  mapStateToProps,
  { getBookings }
)(allbookings);
