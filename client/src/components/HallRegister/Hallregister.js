import React ,  {Component} from 'react';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
import axios from 'axios';
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";

class HallRegister extends Component {

  constructor(props){
    super(props);

    this.onChangeHallName = this.onChangeHallName.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        hallname: '',
        location: '',
        seat: '',
        projecter:'',
        whiteboard:'',
        other:'',
        todo_completed:false
    }
  }

  onChangeHallName(e){
    this.setState({
        hallname:e.target.value
    });
  }

  onChangeLocation(e){
      this.setState({
        location:e.target.value
      });
  }

  onChangeSeat(e){
    this.setState({
      seat:e.target.value
    });
  }

  onChangeProjecter(e){
    this.setState({
      projecter:e.target.value
    });
  }

  onChangeWhiteboard(e){
    this.setState({
      whiteboard:e.target.value
    });
  }

  onChangeOther(e){
    this.setState({
      other:e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`HallName: ${this.state.hallname}`);
    console.log(`Location: ${this.state.location}`);
    console.log(`Seat: ${this.state.seat}`);
    console.log(`Projecter: ${this.state.projecter}`);
    console.log(`Whiteboard: ${this.state.whiteboard}`);
    console.log(`Other: ${this.state.other}`);
    console.log(`Completed: ${this.state.todo_completed}`);

    const newTodo = {
        hallname:this.state.hallname,
        location:this.state.location,
        seat:this.state.seat,
        projecter:this.state.projecter,
        whiteboard:this.state.whiteboard,
        other:this.state.other,
        todo_completed:this.state.todo_completed
    }

   // axios.post('http://localhost:4000/todos/add',newTodo).then(res => console.log(res.data));

    this.setState({
        hallname: '',
        location: '',
        seat: '',
        projecter:'',
        whiteboard:'',
        other:'',
        todo_completed:false
    });

   
}



  render(){
    const options = [
      { label: "* Select Proffessional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learningr" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Other", value: "Other" }
    ];

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
      { label: "0", value: 1 },
      { label: "1", value: 2 },
      { label: "2", value: 3 },
      { label: "3", value: 4 },
    ];

    const option3 = [
      { label: "Number White Boards", value: 0 },
      { label: "0", value: 1 },
      { label: "1", value: 2 },
      { label: "2", value: 3 },
      { label: "3", value: 4 },
    ];

    const option4 = [
      { label: "Other Resources", value: 0 },
      { label: "Computer", value: "Computer" },
    ];

  return (
    <React.Fragment>
         
      <MDBRow>
      <div className="col-sm-4 " />
      <div className="col-sm-7 ">
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header black darken-0">
            <h4 className="h4-responsive text-white"><strong>Hall Registration Form</strong></h4>
          </MDBView>
          <MDBCardBody>
            <form onSubmit = {this.onSubmit}>

                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label" >Hall Name</label>
                    <div className="col-sm-10">
                          <TextFieldGroup
                                  placeholder="Hall Name"
                                  name="name"
                                  value={this.state.name}
                                  onChange={this.onChange}
                                  //error={errors.handle}
                                  
                            />
                    </div>
                </div>

                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Location</label>
                    <div className="col-sm-10">
                        <TextFieldGroup
                            placeholder="Location"
                            name="location"
                            value={this.state.location}
                            onChange={this.onChange}
                            //error={errors.handle}
                            
                         />
                    </div>
                </div>

                 <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Number Of Seats</label>
                      <div className="col-sm-10">
                          <SelectListGroup
                              placeholder="Status"
                              name="status"
                              value={this.state.seat}
                              onChange={this.onChange}
                              options={option1}
                              //error={errors.status}
                          />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Number Of Projecters</label>
                      <div className="col-sm-10">
                          <SelectListGroup
                              placeholder=""
                              name="status"
                              value={this.state.projecter}
                              onChange={this.onChange}
                              options={option2}
                              //error={errors.status}
                          />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Number Of Whiteboard</label>
                      <div className="col-sm-10">
                          <SelectListGroup
                              placeholder=""
                              name="status"
                              value={this.state.whiteboard}
                              onChange={this.onChange}
                              options={option3}
                              //error={errors.status}
                          />
                    </div>
                  </div>
                
                  <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Other Resources</label>
                      <div className="col-sm-10">
                          <SelectListGroup
                              placeholder=""
                              name="status"
                              value={this.state.other}
                              onChange={this.onChange}
                              options={option4}
                              //error={errors.status}
                          />
                    </div>
                  </div>

               

               
                <div className="card text-right"  >
                    <button type="submit" className="btn btn-primary"><strong>Submit</strong></button>
                </div>

                <div className="card text-right"  >
                    <button type="submit" className="btn btn-success"><strong>Edit Form</strong></button>
                </div>

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