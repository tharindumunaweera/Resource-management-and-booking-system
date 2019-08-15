import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getAcadamicBookings } from "../../actions/acadamicbookingActions";
import Allbookdiritem from "./allbookdiritem";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";





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
     
      <React.Fragment>
      <MDBRow>
        <div className="col-sm-4 " />
        <div className="col-sm-7 ">
          <MDBCol md="15">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-0">
                <h4 className="h4-responsive text-white">
                  <strong>Hall Booking Requests</strong>
                </h4>
              </MDBView>
              <MDBCardBody>
              {acadamicbookingItems}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </MDBRow>
    </React.Fragment>
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
