import React ,  {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.hallname}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.location}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.seat}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.projecter}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.whiteboard}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.other}</td>


        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
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
            <div>
               <h3>Hall LIST</h3>
               <table className="table table-striped" style={{marginTop :20}}>
                    <thead>
                        <tr>
                            <th>Hall Name</th>
                            <th>Location</th>
                            <th>Number Of Seats</th>
                            <th>Number Of Projecters</th>
                            <th>Number Of Whietboards</th>
                            <th>Others</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
               </table>
            </div>
        )
    }
}