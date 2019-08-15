
import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createAcadamicbooking } from "../../actions/acadamicbookingActions";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import TextFieldGroup from "../common/TextFieldGroup";
import { deleteBook } from "../../actions/booking1Actions";


class Unionnotificationitem extends Component {
  constructor(props) {
    super(props);
    this.state = {


      hallname: "",
      bookdate: "",
      booktime: "",
      reason: "",
      isOpen: false,
      mywishes: [{ _id: 1, wish: "loading" }],
      abc: "",

      errors: {}
    };


    // this.onSubmit = this.onSubmit.bind(this);
    // this.onSubmit2 = this.onSubmit2.bind(this);


  }

  // onSubmit(e) {
  //     const { booking } = this.props;
  //     e.preventDefault();

  //     const bookingData = {


  //         hallname: booking.hallname,
  //         bookdate: booking.bookdate,
  //         booktime: booking.booktime,
  //         reason: booking.reason,
  //         recommend: "Recooamnd by Acadamic Branch"

  //     };


  //     this.props.createAcadamicbooking(bookingData);





  // }


  // onSubmit2(e) {
  //     const { booking } = this.props;
  //     e.preventDefault();

  //     const bookingData = {
  //         hallname: booking.hallname,
  //         bookdate: booking.bookdate,
  //         booktime: booking.booktime,
  //         reason: booking.reason,
  //         recommend: "Unrecooamnd by Acadamic Branch",

  //     };



  //     this.props.createAcadamicbooking(bookingData);





  // }


  // deleteUser = (id) => {
  //     fetch('/remove/' + id, { method: "delete" })d
  //         .then(res => res.json())
  //         .then(res2 => {
  //             console.log(res2)
  //             const newWishes = this.state.mywishes.filter(item => {
  //                 return item._id !== res2._id
  //             })
  //             this.setState({
  //                 mywishes: newWishes
  //             })
  //         }).then(
  //             this.setState({
  //                 abc: "gfygfyufgyu"

  //             }),
  //             console.log(this.state.abc)
  //         )

  // }


  render() {
    const { booking } = this.props;



    return (







      <React.Fragment>
        <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="15">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Hall Registration Form</strong>
                  </h4>
                </MDBView>
                <MDBCardBody>
                  <h4>{booking.hallname}</h4>
                  <h4>{booking.bookdate}</h4>
                  <h4>{booking.booktime}</h4>
                  <h4>{booking.reason}</h4>
                  <h4>{booking.acceptance}</h4>
                  <button

                    className="btn btn-danger"
                  >
                    PDF Generation
            </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
      </React.Fragment>

    );
  }
}
Unionnotificationitem.propTypes = {
  profile: PropTypes.object.isRequired,
  createAcadamicbooking: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createAcadamicbooking, deleteBook }
)(withRouter(Unionnotificationitem));

