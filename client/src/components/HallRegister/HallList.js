import React ,  {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MDBCard,MDBCol,MDBRow,MDBView,MDBMask,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBBtn,MDBIcon} from "mdbreact";
import './index.css';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.hallname}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.location}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.seat}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.projecter}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.whiteboard}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.other}</td> 


        <td>
        {/* <button type="button" class="btn btn-info">Edit</button> */}
        {/* <a class="button" href="#">Button</a> */}
     <Link className="btn btn-success" to={"/HallEdit/" + props.todo._id    } color={'red'}><strong>Edit</strong></Link> 
        </td>
        
    </tr>
)


export default class HallList extends Component{

    constructor(props){
        super(props);
        this.state = {todos:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/todos/')
            .then(response => {
                this.setState({todos:response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:5000/todos/')
        .then(response => {
            this.setState({todos:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    todoList(){
        return this.state.todos.map(function(currentTodo,i){
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render(){
        return(
            
                 <MDBRow>
          <div className="col-sm-4 " />
          <div className="col-sm-7 ">
            <MDBCol md="30">
              <MDBCard className="mt-5">
              <MDBView className="gradient-card-header black darken-0">
                  <h4 className="h4-responsive text-white">
                    <strong>Hall List</strong>
                  </h4>
                </MDBView>
               <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                        <tr>
                            <th><strong>Hall Name</strong></th>
                            <th><strong>Location</strong></th>
                            <th><strong>Seats</strong></th>
                            <th><strong>Projecters</strong></th>
                            <th><strong>Whietboards</strong></th>
                            <th><strong>Others</strong></th> 
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
               </table>
               </MDBCard>
            </MDBCol>
          </div>
        </MDBRow>
            
        )
    }
}