import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBooking } from "../../actions/bookingActions";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";



class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hallname: "",
      lat: "",
      bookdate: "",
      booktime: "",
      reason: "",
      nameofapplicant: "",
      indexnostudent: "",
      teacherid: "",
      
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    ////////////////////////////////////////////////////////////////


    const { handle } = this.props.match.params

    // const { handle } = this.props.match.params

    const { hallnamebook, bkdate, bktime } = this.props.location.state

    this.setState({

      hallname: hallnamebook,
      bookdate: bkdate,
      booktime: bktime
    });
  }



  

  onSubmit(e) {
    e.preventDefault();

    const bookingData = {
      hallname: this.state.hallname,
      bookdate: this.state.bookdate,
      booktime: this.state.booktime,
      reason: this.state.reason,
      nameofapplicant: this.state.nameofapplicant,
      indexnostudent: this.state.indexnostudent,
      teacherid: this.state.teacherid
    };

    this.props.createBooking(bookingData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    



    return (
      // <div className="add-experience">
      //   <div className="container">
      //     <div className="row">
      //       <div class="col-sm-3" />
      //       <div className="col-md-8 m-auto">
      //         <Link to="/dashboard" className="btn btn-light">
      //           Go Back
      //         </Link>
      //         <h1 className="display-4 text-center">Add Bokking</h1>
      //         <p className="lead text-center">
      //           Add any job or exprience that you had past or current
      //         </p>
              <React.Fragment>
        <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="13">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Hall Booking Form</strong>
                  </h4>
                </MDBView>
                <MDBCardBody>
              <form onSubmit={this.onSubmit}>
                {/* <h1>{this.state.lat}</h1> */}
                <TextFieldGroup
                  placeholder="Hall name"
                  name="hallname"
                  value={this.state.hallname}
                  onChange={this.onChange}
                />

                <h6>Book Date</h6>
                <TextFieldGroup
                  name="bookdate"
                  
                  value={this.state.bookdate}
                  onChange={this.onChange}
                  
                />
                {/* <h1>{this.state.bookdate.selectedDate.ToString("dddd")}</h1> */}
                <h6>Book Time</h6>
                <TextFieldGroup
                  placeholder="Booking time"
                  name="booktime"
                  value={this.state.booktime}
                  onChange={this.onChange}
                />
                <h6>Reason</h6>
                <TextAreaFieldGroup
                  placeholder="Reason"
                  name="reason"
                  value={this.state.reason}
                  onChange={this.onChange}
                />
                <h6>Name of Applicant</h6>
                <TextAreaFieldGroup
                  placeholder="Name Of Applicant"
                  name="nameofapplicant"
                  value={this.state.nameofapplicant}
                  onChange={this.onChange}
                />
                <h6>Student Id</h6>
                <TextAreaFieldGroup
                  placeholder="Id of Student Applicant"
                  name="indexnostudent"
                  value={this.state.indexnostudent}
                  onChange={this.onChange}
                />
                <h6>Lecturer Id</h6>
                <TextAreaFieldGroup
                  placeholder="Lecturer ID"
                  name="teacherid"
                  value={this.state.teacherid}
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
              </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
      </React.Fragment>
         
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
