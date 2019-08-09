import React, { Component } from 'react'
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import axios from 'axios'
 import { saveAs } from 'file-saver';
import PropTypes from "prop-types";
import { getCurrentNine, deleteAccount } from "../../actions/nineActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const initialState = {
  hallname:"",
  date:"",
  starttime: "",
  endtime: "",
  purpose: "",
  discription:"",
  applicantname:"",
  studentid:"",
  phonenumber:"",

  puposeerror: '',
  discriptionerror: '',
  applicantnameerror: '',
  studentiderror:'',
  phonenumbererror: ''

}


class Form extends Component {
  state = {
    visible : false,
    is_success : false
  }
  toggle(){
    this.setState({
      visible: !this.state.visible
    });
  }

  state = initialState

  constructor() {
    super();
  
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
  }

  
  validate = () => {

   let puposeerror= '';
   let discriptionerror= '';
   let applicantnameerror= '';
   let studentiderror='';
   let phonenumbererror= '';

    if(!this.state. purpose){
      puposeerror = "This Field Cannot Be Blank";
    }
    if(!this.state.discription){
      discriptionerror = "This Field Cannot Be Blank";
    }
    if(!this.state.applicantname){
      applicantnameerror = "This Field Cannot Be Blank";
    }
    if(!this.state.studentid){
      studentiderror = "This Field Cannot Be Blank";
    }
    if(!this.state.phonenumber){
      phonenumbererror = "This Field Cannot Be Blank";
    }
    



    if (puposeerror || discriptionerror || applicantnameerror || studentiderror ||  phonenumbererror ){
      this.setState({puposeerror , discriptionerror , applicantnameerror , studentiderror , phonenumbererror });
      return false;
    }

    return true;
  };


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
    return (
      <React.Fragment>
        <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="13">
              <MDBCard className="mt-5">
                <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Hall </strong>
                  </h4>
                </MDBView>
                <MDBCardBody>
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
              <TextFieldGroup
                placeholder="Start Time"
                name="starttime"
                value={this.state.starttime}
                onChange={this.handleChange}
               
              />
            </li>

            <li className="list-group-item">
              <TextFieldGroup
                placeholder="End Time"
                name="endtime"
                value={this.state.endtime}
                onChange={this.handleChange}
              
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
                  name="applicantname"
                  value={this.state.applicantname}
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
          </div>
        </MDBRow>
        </React.Fragment>
    )
  }
}

Form.propTypes = {
  getCurrentNine: PropTypes.func.isRequired,
  nine: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nine: state.nine
});

export default connect(
  mapStateToProps,
  { getCurrentNine }
)(withRouter(Form));

