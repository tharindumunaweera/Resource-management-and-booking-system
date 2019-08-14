import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getAcadamicBookings } from "../../actions/acadamicbookingActions";
import Allbookdiritem from "./allbookdiritem";




class allbookdir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: "tharindu"
    };
  }
  componentDidMount() {
    this.props.getAcadamicBookings();
  }

  render() {

    const { acadamicbookings, loading } = this.props.acadamicbooking;
    let acadamicbookingItems;

    if (acadamicbookings === null || loading) {
      acadamicbookingItems = <Spinner />;
    } else {
      if (acadamicbookings.length >= 0) {
        acadamicbookingItems = acadamicbookings.map(acadamicbookings => (
          <Allbookdiritem key={acadamicbookings._id} booking={acadamicbookings} />
        ));
      } else {
        acadamicbookingItems = <h4>No profiles found...</h4>;
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
              {acadamicbookingItems}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

allbookdir.propTypes = {
  getAcadamicBookings: PropTypes.func.isRequired,
  acadamicbooking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  acadamicbooking: state.acadamicbooking
});

export default connect(
  mapStateToProps,
  { getAcadamicBookings }
)(allbookdir);
