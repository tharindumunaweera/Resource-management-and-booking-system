import React, { Component } from 'react'
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import format from 'date-fns/format';





export default class Sahan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tha: ""
        };
    }


    // onSelect={function(date) {alert('You selected: ' + format(date, 'ddd, MMM Do YYYY'))}}
    render() {

        return (
            <div>
                {/*     <InfiniteCalendar />, document.querySelector('#root') */}
                {/* <InfiniteCalendar onSelect={function(date) {alert('You selected: ' + format(date, 'ddd, MMM Do YYYY'))}}/> */}
                <h1> shan</h1>
                <input type="text" value={this.state.name}></input>
                <input type="text" value={this.state.tha}></input>



                <InfiniteCalendar
                    onSelect={date =>
                        this.setState({
                            name: format(date, 'ddd, MMM Do YYYY'),
                            tha: format(date, 'dddd')
                        })
                    }

                />

            </div>
        )
    }
}
