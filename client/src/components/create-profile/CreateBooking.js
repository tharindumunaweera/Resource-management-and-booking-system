import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createBooking } from "../../actions/bookingActions";
import { createBooking1 } from "../../actions/booking1Actions";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Alert } from 'reactstrap';

const initialState = {
  hallname: "",
  lat: "",
  bookdate: "",
  booktime: "",
  reason: "",
  nameofapplicant: "",
  indexnostudent: "",
  teacherid: "",


  reasonerror: '',
  nameofapplicanterror: '',
  indexofstudenterror: '',
  teacheriderror: ''

}


class CreateBooking extends Component {
  state = {
    visible: false,
    is_success: false
  }

  toggle() {
    this.setState({
      visible: !this.state.visible
    });
  }

  state = initialState

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  validate = () => {

    let reasonerror = ' ';
    let nameofapplicanterror = '';
    let indexofstudenterror = '';
    let teacheriderror = '';

    if (!this.state.reason) {
      reasonerror = "This Field Cannot Be Blank";
    }
    if (!this.state.nameofapplicant) {
      nameofapplicanterror = "This Field Cannot Be Blank";
    }
    if (!this.state.indexnostudent) {
      indexofstudenterror = "This Field Cannot Be Blank";
    }
    if (!this.state.teacherid) {
      teacheriderror = "This Field Cannot Be Blank";
    }





    if (reasonerror || nameofapplicanterror || indexofstudenterror || teacheriderror) {
      this.setState({ reasonerror, nameofapplicanterror, indexofstudenterror, teacheriderror });
      return false;
    }

    return true;
  };



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
    const isValid = this.validate();

    if (isValid) {

      //clear form
      this.setState(initialState);
    }

    const bookingData = {
      hallname: this.state.hallname,
      bookdate: this.state.bookdate,
      booktime: this.state.booktime,
      reason: this.state.reason,
      nameofapplicant: this.state.nameofapplicant,
      indexnostudent: this.state.indexnostudent,
      teacherid: this.state.teacherid
    };

    this.props.createBooking1(bookingData)

    this.props.createBooking(bookingData, this.setState({
      is_success: true
    }));





  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  // createAndDownloadPdf = () => {
  //   axios.post('/create-pdf', this.state)
  //     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
  //     .then((res) => {
  //       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

  //       saveAs(pdfBlob, 'BookingForm.pdf');
  //     })
  // }

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
                  {this.state.is_success ? <Alert color="success" isOpen={this.state.visible} toggle={this.toggle.bind(this)} >Successfully Data Added</Alert> : null}

                  <form onSubmit={this.onSubmit}>
                    {/* <h1>{this.state.lat}</h1> */}

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Hall Name</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextFieldGroup
                          placeholder="Hall name"
                          name="hallname"
                          value={this.state.hallname}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Booking Date</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextFieldGroup
                          name="bookdate"
                          value={this.state.bookdate}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    {/* <h1>{this.state.bookdate.selectedDate.ToString("dddd")}</h1> */}

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Booking Time</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextFieldGroup
                          placeholder="Booking time"
                          name="booktime"
                          value={this.state.booktime}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Reasson</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextAreaFieldGroup
                          placeholder="Reason"
                          name="reason"
                          value={this.state.reason}
                          onChange={this.onChange}
                        />
                        {this.state.reasonerror ? (<div style={{ fontSize: 15, color: "red" }}>{this.state.reasonerror}</div>) : null}
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Applicant Name</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextAreaFieldGroup
                          placeholder="Name Of Applicant"
                          name="nameofapplicant"
                          value={this.state.nameofapplicant}
                          onChange={this.onChange}
                        />
                        {this.state.nameofapplicanterror ? (<div style={{ fontSize: 15, color: "red" }}>{this.state.nameofapplicanterror}</div>) : null}
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong>Student ID</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextAreaFieldGroup
                          placeholder="Id of Student Applicant"
                          name="indexnostudent"
                          value={this.state.indexnostudent}
                          onChange={this.onChange}
                        />
                        {this.state.indexofstudenterror ? (<div style={{ fontSize: 15, color: "red" }}>{this.state.indexofstudenterror}</div>) : null}
                      </div>
                    </div>


                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        <strong> Lecturer ID</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextAreaFieldGroup
                          placeholder="Lecturer ID"
                          name="teacherid"
                          value={this.state.teacherid}
                          onChange={this.onChange}
                        />
                        {this.state.teacheriderror ? (<div style={{ fontSize: 15, color: "red" }}>{this.state.teacheriderror}</div>) : null}
                      </div>
                    </div>

                    {/* <input
                      type="submit"
                      value="submit"
                      className="btn btn-info btn-block mt-4"
                    /> */}

                    <div className="card text-right">
                      <button type="submit" className="btn btn-primary" outline={true} onClick={this.toggle.bind(this)}>
                        <strong>Submit</strong>
                      </button>
                    </div>
                    {/* <input onClick={this.createAndDownloadPdf}
                      type="submit"
                      value="submit"
                      className="btn btn-success btn-block mt-4"
                    /> */}
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
  { createBooking, createBooking1 }
)(withRouter(CreateBooking));
