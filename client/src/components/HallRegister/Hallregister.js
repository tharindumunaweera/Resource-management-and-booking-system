import React, { Component } from "react";
import {MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";

import src1 from "../../assets/img-1.jpg";
import axios from "axios";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import InputGroup from "../common/InputGroup";
import PropTypes from "prop-types";

const initialState = {
      hallname: "",
      location: "",
      seat: "",
      projecter: "",
      whiteboard: "",
      other: "",

      hallnameerror: ' ',
      locationerror: ' ',
      numofseaterror: ' ',
      numofprojectererror: '',
      numofwhiteboarderror: '',
      numofothererror: ''

     
}

class HallRegister extends Component {

  state = initialState
  constructor(props) {
    super(props);

    // this.onChangeHallName = this.onChangeHallName.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);
    // this.onChangeSeat = this.onChangeSeat.bind(this);
    // this.onChangeProjecter = this.onChangeProjecter.bind(this);
    // this.onChangeWhiteboard = this.onChangeWhiteboard.bind(this);
    // this.onChangeOther = this.onChangeOther.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onChange = this.onChange.bind(this);

    this.state = initialState;
  }

  //   onChangeHallName(e) {
  //     this.setState({
  //       hallname: e.target.value
  //     });
  //   }

  //   onChangeLocation(e) {
  //     this.setState({
  //       location: e.target.value
  //     });
  //   }

  //   onChangeSeat(e) {
  //     this.setState({
  //       seat: e.target.value
  //     });
  //   }

  //   onChangeProjecter(e) {
  //     this.setState({
  //       projecter: e.target.value
  //     });
  //   }

  //   onChangeWhiteboard(e) {
  //     this.setState({
  //       whiteboard: e.target.value
  //     });
  //   }

  //   onChangeOther(e) {
  //     this.setState({
  //       other: e.target.value
  //     });
  //   }

  validate = () => {
    let hallnameerror = '';
    let locationerror = '';
    let numofseaterror = ' ';
    let numofprojectererror = '';
    let numofwhiteboarderror = '';
    let numofothererror = '';

    if(!this.state.hallname){
      hallnameerror = "Hall name Field Cannot Be Blank";
    }
    if(!this.state.location){
      locationerror = "Location Field Cannot Be Blank";
    }
    if(!this.state.seat){
      numofseaterror = "This Field Cannot Be Blank";
    }
    if(!this.state.whiteboard){
      numofwhiteboarderror = "This Field Cannot Be Blank";
    }
    if(!this.state.projecter){
      numofprojectererror = "This Field Cannot Be Blank";
    }
    if(!this.state.other){
      numofothererror = "This Field Cannot Be Blank";
    }




    if (hallnameerror || locationerror || numofothererror || numofprojectererror || numofseaterror || numofwhiteboarderror){
      this.setState({hallnameerror , locationerror , numofothererror , numofprojectererror , numofseaterror , numofwhiteboarderror });
      return false;
    }

    return true;
  };



  onSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();

    if(isValid){
      console.log("submit");
      console.log(`HallName: ${this.state.hallname}`);
      console.log(`Location: ${this.state.location}`);
      console.log(`Seat: ${this.state.seat}`);
      console.log(`Projecter: ${this.state.projecter}`);
      console.log(`Whiteboard: ${this.state.whiteboard}`);
      console.log(`Other: ${this.state.other}`);
      console.log(`Completed: ${this.state.todo_completed}`);
      //clear form
      this.setState(initialState);
    }
    
    //  console.log(`HallName: ${this.state.hallname}`);
    //  console.log(`Location: ${this.state.location}`);
    //  console.log(`Seat: ${this.state.seat}`);
    //  console.log(`Projecter: ${this.state.projecter}`);
    //  console.log(`Whiteboard: ${this.state.whiteboard}`);
    //  console.log(`Other: ${this.state.other}`);
    //  console.log(`Completed: ${this.state.todo_completed}`);
  

    const newTodo = {
      hallname: this.state.hallname,
      location: this.state.location,
      seat: this.state.seat,
      projecter: this.state.projecter,
      whiteboard: this.state.whiteboard,
      other: this.state.other,
      todo_completed: this.state.todo_completed
    };

    axios
      .post("http://localhost:5000/todos/add", newTodo)
      .then(res => console.log(res.data));

    //  this.setState({
    //    hallname: "",
    //    location: "",
    //    seat: "",
    //    projecter: "",
    //    whiteboard: "",
    //    other: "",
    //    todo_completed: false
    //  });
    // this.setState({
    //   hallname: "",
    //   location: "",
    //   seat: "",
    //   projecter: "",
    //   whiteboard: "",
    //   other: "",
    //   todo_completed: false
    // });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const option1 = [
      { label: "Number Of Seats", value: 0 },
      { label: "Less than 100", value: "Less than 100" },
      { label: "100  -  200", value: "100  -  200" },
      { label: "200  -  300", value: "200  -  300" },
      { label: "300  -  400", value: "300  -  400" },
      { label: "Greater than 400 ", value: "Greater than 400 " }
    ];

    const option2 = [
      { label: "Number Of Projecters", value: 0 },
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" }
    ];

    const option3 = [
      { label: "Number Of White Boards", value: 0 },
      { label: "0", value: "0" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" }
    ];

    const option4 = [
      { label: "Other Resources", value: 0 },
      { label: "Computer", value: "Computer" },
      { label: "Sound System", value: "Sound System" },
      { label: "Podium", value: "Podium" }

    ];

    const option5 = [
      { label: "Floor", value: 0 },
      { label: "1 Floor", value: "1 Floor" },
      { label: "2 Floor", value: "2 Floor" },
      { label: "3 Floor", value: "3 Floor" },
      { label: "4 Floor", value: "4 Floor" },
      { label: "5 Floor", value: "5 Floor" }
    ];

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
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                       <strong> Hall Name</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextFieldGroup
                          placeholder="Hall Name"
                          name="hallname"
                          value={this.state.hallname}
                          onChange={this.onChange}
                          //error={errors.handle}
                        />
                         {this.state.hallnameerror ? (<div style={{fontSize: 15 , color: "red"}}>{this.state.hallnameerror}</div> ):null}
                      </div>
                     
                      
                    </div>
                   

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                       <strong>Number Of Seats</strong>
                      </label>
                      <div className="col-sm-10">
                        <TextFieldGroup
                          placeholder="Number Of Seats"
                          name="seat"
                          value={this.state.seat}
                          onChange={this.onChange}
                          //error={errors.handle}
                        />
                           <div style={{fontSize: 15 , color: "red"}}>{this.state.numofseaterror}</div>
                      </div>
                    
                    </div>
                  


                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                       <strong> Location</strong>
                      </label>
                      <div className="col-sm-10">
                        <SelectListGroup
                          placeholder="Location"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                          options={option5}
                          //error={errors.handle}
                        />
                           <div style={{fontSize: 15 , color: "red"}}>{this.state.locationerror}</div>
                      </div>
                     
                    </div>
                  

                   
                    {/* <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                       <strong> Number Of Seats </strong>
                      </label>
                      <div className="col-sm-10">
                        <SelectListGroup
                          placeholder="seat"
                          name="seat"
                          value={this.state.seat}
                          onChange={this.onChange}
                          options={option1}
                          //error={errors.status}
                        />
                      </div>
                    </div> */}

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                      <strong>  Number Of Projecters </strong>
                      </label>
                      <div className="col-sm-10">
                        <SelectListGroup
                          placeholder="Number Of Projecters"
                          name="projecter"
                          value={this.state.projecter}
                          onChange={this.onChange}
                          options={option2}
                          //error={errors.status}
                        />
                         <div style={{fontSize: 15 , color: "red"}}>{this.state.numofprojectererror}</div>
                      </div>
                     
                    </div>
                    

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                       <strong> Number Of Whiteboards </strong>
                      </label>
                      <div className="col-sm-10">
                        <SelectListGroup
                          placeholder="Number Of Whiteboards"
                          name="whiteboard"
                          value={this.state.whiteboard}
                          onChange={this.onChange}
                          options={option3}
                          //error={errors.status}
                        />
                          <div style={{fontSize: 15 , color: "red"}}>{this.state.numofwhiteboarderror}</div>
                      </div>
                      
                    </div>
                  

                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">
                      <strong>  Other Resources </strong>
                      </label>
                      <div className="col-sm-10">
                        <SelectListGroup
                          placeholder="Other Resources"
                          name="other"
                          value={this.state.other}
                          onChange={this.onChange}
                          options={option4}
                          //error={errors.status}
                        />
                       
                       <div style={{fontSize: 15 , color: "red"}}>{this.state.numofothererror}</div>
                      </div>
                      
                    </div>
                    

                    <div className="card text-right">
                      <button type="submit" className="btn btn-primary">
                        <strong>Submit</strong>
                      </button>
                    </div>

                    {/* <div className="card text-right">
                      <button type="submit" className="btn btn-success">
                        <strong>Edit Form</strong>
                      </button>
                    </div> */}

                    {/* <div className="card text-right"  >
                    <button type="button" className="btn btn-danger"><strong>Delete Hall</strong></button>
                </div> */}
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

export default HallRegister;
