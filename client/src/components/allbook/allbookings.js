import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getBookings1 } from "../../actions/booking1Actions";
import Allbookingitem from "./allbookingitem";




class allbookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: "tharindu"
    };
  }


  render() {

    const { bookings1, loading } = this.props.booking1;
    let booking1Items;

    if (bookings1 === null || loading) {
      booking1Items = <Spinner />;
    } else {
      if (bookings1.length > 0) {
        booking1Items = bookings1.map(booking1 => (
          <Allbookingitem key={booking1._id} booking={booking1} />
        ));
      } else {
        booking1Items = <h4>No profiles found...</h4>;
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
              {booking1Items}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

allbookings.propTypes = {
  getBookings1: PropTypes.func.isRequired,
  booking1: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking1: state.booking1
});

export default connect(
  mapStateToProps,
  { getBookings1 }
)(allbookings);
