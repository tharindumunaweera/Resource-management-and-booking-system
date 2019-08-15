
import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createDirectorbooking } from "../../actions/directorbookingActions";

import TextFieldGroup from "../common/TextFieldGroup";


class Allbookdiritem extends Component {
    constructor(props) {
        super(props);
        this.state = {


            hallname: "",
            bookdate: "",
            booktime: "",
            reason: "",
            isOpen: false,
            mywishes: [{ _id: 1, wish: "loading" }],
            abc: "",
            acceptance: "",

            errors: {}
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);


    }

    onSubmit(e) {
        const { booking } = this.props;
        e.preventDefault();

        const bookingData = {


            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            acceptance: "Accepted by Director"

        };

        this.props.createDirectorbooking(bookingData);






    }


    onSubmit2(e) {
        const { booking } = this.props;
        e.preventDefault();

        const bookingData = {
            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            acceptance: "Rejected by Director",

        };



        this.props.createDirectorbooking(bookingData);





    }


    // deleteUser = (id) => {
    //     fetch('/remove/' + id, { method: "delete" })
    //         .then(res => res.json())
    //         .then(res2 => {
    //             console.log(res2)
    //             const newWishes = this.state.mywishes.filter(item => {
    //                 return item._id !== res2._id
    //             })
    //             this.setState({
    //                 mywishes: newWishes
    //             })
    //         }).then(
    //             this.setState({
    //                 abc: "gfygfyufgyu"

    //             }),
    //             console.log(this.state.abc)
    //         )

    // }


    render() {
        const { booking } = this.props;



        return (
            <div className="card card-body bg-light mb-3" >
                <div className="row">

                    <div className="col-4">
                        <h4>{booking.hallname}</h4>
                        <h4>{booking.bookdate}</h4>
                        <h4>{booking.booktime}</h4>
                        <h4>{booking.reason}</h4>
                        <h4>{booking.recommend}</h4>
                        {/* <button
                            onClick={() => this.deleteUser(booking._id)}
                            className="btn btn-danger"
                        >
                            Delete My Account
            </button> */}




                    </div>
                    {/* <div className="col-8">
                        <Link className="btn btn-success" to={"#"} align={"Right"} color={'red'}><strong>RECOMMANDED</strong></Link>
                        <Link className="btn btn-primary" to={"#"} align={"Right"} color={'red'}><strong>UNRECOMMANDED</strong></Link>
                    </div> */}

                    {/* <form onSubmit={this.onSubmit}>


                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-info btn-light mt-4"
                        />
                    </form>

                    <form onSubmit={this.onSubmit2}>

                        <input
                            type="submit"
                            value="Submit2"
                            className="btn btn-info btn-block mt-4"
                        />
                    </form> */}

                    <button type="button" class="btn btn-primary" onClick={this.onSubmit}
                    >
                        Accept
                    </button>

                    <button type="button" class="btn btn-success" onClick={this.onSubmit2}
                    >
                        Reject
                    </button>




                </div>
            </div>
        );
    }
}
Allbookdiritem.propTypes = {
    profile: PropTypes.object.isRequired,
    createDirectorbooking: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createDirectorbooking }
)(withRouter(Allbookdiritem));

