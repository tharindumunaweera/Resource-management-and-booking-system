import React ,  {Component} from 'react';
import axios from 'axios';
import { MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import { Alert } from 'reactstrap';


export default class HallEdit extends Component{
 
    state = {
    visible : false,
    is_success : false
  }
  toggle(){
    this.setState({
      visible: !this.state.visible
    });
  }
    constructor(props){
        super(props);

        // this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        // this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        // this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        // this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.onChange = this.onChange.bind(this);

        this.state = {
          hallname: "",
          location: "",
          seat: "",
          projecter: "",
          whiteboard: "",
          other: "",
          todo_completed: false
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    hallname: response.data.hallname,
                    location: response.data.location,
                    seat: response.data.seat,
                    projecter: response.data.projecter,
                    whiteboard: response.data.whiteboard,
                    other: response.data.other,
                    todo_completed: response.data.todo_completed
                })
            })

            .catch(function(error){
                console.log(error)
            })
    }

    // onChangeTodoDescription(e) {
    //     this.setState({
    //         todo_description: e.target.value
    //     });
    // }

    // onChangeTodoResponsible(e) {
    //     this.setState({
    //         todo_responsible: e.target.value
    //     });
    // }

    // onChangeTodoPriority(e) {
    //     this.setState({
    //         todo_priority: e.target.value
    //     });
    // }

    // onChangeTodoCompleted(e) {
    //     this.setState({
    //         todo_completed: !this.state.todo_completed
    //     });
    // }

    onSubmit(e){
        e.preventDefault();
        const obj = {
          hallname: this.state.hallname,
          location: this.state.location,
          seat: this.state.seat,
          projecter: this.state.projecter,
          whiteboard: this.state.whiteboard,
          other: this.state.other,
          todo_completed: this.state.todo_completed
        };


        axios.post('http://localhost:5000/todos/update/'+this.props.match.params.id , obj)
            .then(res =>{ 
        this.setState({
          is_success:true
        })
        console.log(res.data)
      }
        )
        .catch((err)=>{
          this.setState({
            is_success:false
          })
        });
        
        // this.props.history.push('/');
    }

    
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

    render(){

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
        { label: "Number White Boards", value: 0 },
        { label: "0", value: "0" },
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" }
      ];
  
      const option4 = [
        { label: "Other Resources", value: 0 },
        { label: "Computer", value: "Computer" }
      ];

      const option5 = [
        { label: "Floor", value: 0 },
        { label: "1 Floor", value: "1 Floor" },
        { label: "2 Floor", value: "2 Floor" },
        { label: "3 Floor", value: "3 Floor" },
        { label: "4 Floor", value: "4 Floor" },
        { label: "5 Floor", value: "5 Floor" }
      ];
  

        return(
          <React.Fragment>
          <MDBRow>
            <div className="col-sm-4 " />
            <div className="col-sm-7 ">
              <MDBCol md="13">
                <MDBCard className="mt-5">
                  <MDBView className="gradient-card-header black darken-0">
                    <h4 className="h4-responsive text-white">
                      <strong>Hall Edit Form</strong>
                    </h4>
                  </MDBView>
                  <MDBCardBody>
                  {this.state.is_success ? <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)} >Successfully Update The Data</Alert> : null} 
               
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          <strong>Hall Name</strong>
                        </label>
                        <div className="col-sm-10">
                          <TextFieldGroup
                            placeholder="Hall Name"
                            name="hallname"
                            value={this.state.hallname}
                            onChange={this.onChange}
                            //error={errors.handle}
                          />
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
                      </div>
                    </div>
  
                      {/* <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                         <strong> Number Of Seats</strong>
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
                         <strong>Number Of Projecters</strong> 
                        </label>
                        <div className="col-sm-10">
                          <SelectListGroup
                            placeholder=""
                            name="projecter"
                            value={this.state.projecter}
                            onChange={this.onChange}
                            options={option2}
                            //error={errors.status}
                          />
                        </div>
                      </div>
  
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          <strong>Number Of Whiteboards</strong>
                        </label>
                        <div className="col-sm-10">
                          <SelectListGroup
                            placeholder=""
                            name="whiteboard"
                            value={this.state.whiteboard}
                            onChange={this.onChange}
                            options={option3}
                            //error={errors.status}
                          />
                        </div>
                      </div>
  
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                         <strong> Other Resources</strong>
                        </label>
                        <div className="col-sm-10">
                          <SelectListGroup
                            placeholder=""
                            name="other"
                            value={this.state.other}
                            onChange={this.onChange}
                            options={option4}
                            //error={errors.status}
                          />
                        </div>
                      </div>
  
                      <div className="card text-right">
                        <button type="submit" className="btn btn-info" onClick={this.toggle.bind(this)}>
                          <strong>Update</strong>
                        </button>
                      </div>

                     
  
                     
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          </MDBRow>
        </React.Fragment>      
          )
    }
}