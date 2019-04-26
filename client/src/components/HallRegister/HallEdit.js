import React ,  {Component} from 'react';
import axios from 'axios';
import { MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";


export default class HallEdit extends Component{

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
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
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
  

        return(
          <React.Fragment>
          <MDBRow>
            <div className="col-sm-4 " />
            <div className="col-sm-7 ">
              <MDBCol md="12">
                <MDBCard className="mt-5">
                  <MDBView className="gradient-card-header black darken-0">
                    <h4 className="h4-responsive text-white">
                      <strong>Hall Registration Edit Form</strong>
                    </h4>
                  </MDBView>
                  <MDBCardBody>
                    <form onSubmit={this.onSubmit}>
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Hall Name
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
                          Location
                        </label>
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
                        <label className="col-sm-2 col-form-label">
                          Number Of Seats
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
                      </div>
  
                      <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                          Number Of Projecters
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
                          Number Of Whiteboard
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
                          Other Resources
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
          )
    }
}