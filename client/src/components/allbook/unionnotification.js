import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getDirectorBookings } from "../../actions/directorbookingActions";
import Unionnotificationitem from "./unionnotificationitem"




class unionnotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: "tharindu"
    };
  }
  componentDidMount() {
    this.props.getDirectorBookings();
  }

  render() {

    const { directorbookings, loading } = this.props.directorbooking;
    let directorbookingItems;

    if (directorbookings === null || loading) {
      directorbookingItems = <Spinner />;
    } else {
      if (directorbookings.length > 0) {
        directorbookingItems = directorbookings.map(directorbooking => (
          <Unionnotificationitem key={directorbooking._id} booking={directorbooking} />
        ));
      } else {
        directorbookingItems = <h4>No profiles found...</h4>;
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
              {directorbookingItems}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

unionnotification.propTypes = {
  getDirectorBookings: PropTypes.func.isRequired,
  directorbooking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  directorbooking: state.directorbooking
});

export default connect(
  mapStateToProps,
  { getDirectorBookings }
)(unionnotification);
