
import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { withRouter } from "react-router-dom";
import { getCurrentNine, deleteAccount } from "../../actions/nineActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from 'axios'
import { saveAs } from 'file-saver'
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon
} from "mdbreact";

class AvailableLoad extends Component {
  constructor() {
    super();
    this.state = {
      hallname:"",
      date:"",
      starttime: "",
      endtime: "",
      purpose: "",
      discription:"",
      name:"",
      studentid:"",
      phonenumber:""
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentNine()

    const { handle } = this.props.match.params
    const { name } = this.props.location.state

    this.setState({
      hallname: name
    });
  }

//pdf creation
handleChange = ({ target: { value , name }}) => this.setState({ [name]: value}) ;

createAndDownloadPdf = () => {
  axios.post('/create-pdf' , this.state)
     .then(() => axios.get('fetch-pdf', {responseType: 'blob'}))
     .then((res) =>{
       const pdfBlob = new Blob([res.data] , {type:'application/pdf'});

       saveAs(pdfBlob , 'BookingForm.pdf');
     })
}


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const startTime = [
      { label: "Start Time", value: 0 },
      { label: "8 a.m", value: "8 a.m" },
      { label: "8.30 a.m", value: "8.30 a.m" },
      { label: "9 a.m", value: "9 a.m" },
      { label: "9.30 a.m", value: "9.30 a.m" },
      { label: "10 a.m", value: "10 a.m" },
      { label: "10.30 a.m", value: "10.30 a.m" },
      { label: "11 a.m", value: "11 a.m" },
      { label: "11.30 a.m", value: "11.30 a.m" },
      { label: "12 p.m", value: "12 p.m" },
      { label: "12.30 p.m", value: "12.30 p.m" },
      { label: "1 p.m", value: "1 p.m" },
      { label: "1.30 p.m", value: "1.30 p.m" },
      { label: "2 p.m", value: "2 p.m" },
      { label: "2.30 p.m", value: "2.30 p.m" },
      { label: "3 p.m", value: "3 p.m" },
      { label: "3.30 p.m", value: "3.30 p.m" },
      { label: "4 p.m", value: "4 p.m" },
      { label: "4.30 p.m", value: "4.30 p.m" },
      { label: "5 p.m", value: "5 p.m" }
    ];

    const endTime = [
      { label: "End Time", value: 0 },
      { label: "8.30 a.m", value: "8.30 a.m" },
      { label: "9 a.m", value: "9 a.m" },
      { label: "9.30 a.m", value: "9.30 a.m" },
      { label: "10 a.m", value: "10 a.m" },
      { label: "10.30 a.m", value: "10.30 a.m" },
      { label: "11 a.m", value: "11 a.m" },
      { label: "11.30 a.m", value: "11.30 a.m" },
      { label: "12 p.m", value: "12 p.m" },
      { label: "12.30 p.m", value: "12.30 p.m" },
      { label: "1 p.m", value: "1 p.m" },
      { label: "1.30 p.m", value: "1.30 p.m" },
      { label: "2 p.m", value: "2 p.m" },
      { label: "2.30 p.m", value: "2.30 p.m" },
      { label: "3 p.m", value: "3 p.m" },
      { label: "3.30 p.m", value: "3.30 p.m" },
      { label: "4 p.m", value: "4 p.m" },
      { label: "4.30 p.m", value: "4.30 p.m" },
      { label: "5 p.m", value: "5 p.m" }
    ];
    return (
      <React.Fragment>
      
        <MDBRow>
        <div className="col-sm-3" />
          <MDBCol md="4">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black">
                <h4 className="h4-responsive text-white">
                <strong>  Date </strong>
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '900px'}} className="text-center">
               
              <li className="list-group-item">
              <table className="table">
                <thead>
                  <tr>
                    <th> <strong>Time </strong></th>

                    <th> <strong> Availability </strong></th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>8 - 9 a.m</strong>
                    </td>

                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>9 - 10 a.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>10 - 11 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>11 - 12 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>12 - 1 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>1 - 2 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>2 - 3 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>3 - 4 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>4 - 5 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>5 - 6 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>6 - 7 p.m</strong>
                    </td>
                    <td>
                      <Link className="nav-link" to="/reg">
                        <strong>Not Available</strong>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black">
                <h4 className="h4-responsive text-white">
                <strong> Make Booking </strong>
                
                </h4>
              </MDBView>
              <MDBCardBody style={{width: '100%', height: '1000px'}} className="text-center">


              <li className="list-group-item">
            <TextFieldGroup
                  editable= "false"
                  placeholder=""
                  name="hallname"
                  value={this.state.hallname}
                  onChange={this.handleChange}
                />
            </li>
                
              <li className="list-group-item">
              <TextFieldGroup
                placeholder="Date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
              />
            </li>


              <li className="list-group-item">
              <SelectListGroup
                placeholder="Start Time"
                name="starttime"
                value={this.state.starttime}
                onChange={this.handleChange}
                options={startTime}
              />
            </li>

            <li className="list-group-item">
              <SelectListGroup
                placeholder="End Time"
                name="endtime"
                value={this.state.endtime}
                onChange={this.handleChange}
                options={endTime}
              />
            </li>


            <li className="list-group-item">
              <TextAreaFieldGroup
                placeholder="Purpose"
                name="purpose"
                value={this.state.purpose}
                onChange={this.handleChange}
              />
            </li>
            <li className="list-group-item">
              <TextAreaFieldGroup
                placeholder="Discription"
                name="discription"
                value={this.state.discription}
                onChange={this.handleChange}
              />
            </li>
          
            <li className="list-group-item">
            <TextFieldGroup
                  editable= "false"
                  placeholder="Applicant Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
            </li>
            <li className="list-group-item">
            <TextFieldGroup
                  editable= "false"
                  placeholder="StudentId / LecturerId"
                  name="studentid"
                  value={this.state.studentid}
                  onChange={this.handleChange}
                />
            </li>
            <li className="list-group-item">
            <TextFieldGroup
                  editable= "false"
                  placeholder="Phone Number"
                  name="phonenumber"
                  value={this.state.phonenumber}
                  onChange={this.handleChange}
                />
            </li>


           
             <div className="card text-right"  >
                    <button type="button" className="btn btn-primary"><strong>Submit</strong></button>
             </div>
             <div className="card text-right"  >
                    <button type="button" className="btn btn-success" onClick= {this.createAndDownloadPdf}><strong>PDF Generate</strong></button>
             </div>


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
       
      </React.Fragment>
    );
  }
}
AvailableLoad.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,
  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine
});

export default connect(
  mapStateToProps,
  { getCurrentNine }
)(withRouter(AvailableLoad));

