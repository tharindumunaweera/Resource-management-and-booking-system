
import React, { Component } from 'react';
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createAcadamicbooking } from "../../actions/acadamicbookingActions";
import TextFieldGroup from "../common/TextFieldGroup";
import { deleteBook } from "../../actions/booking1Actions";
import { getBookings1 } from "../../actions/booking1Actions";

class Allbookingitem extends Component {
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
            recommend: "Recooamnd by Acadamic Branch"

        };


        this.props.createAcadamicbooking(bookingData);







    }


    onSubmit2(e) {
        const { booking } = this.props;
        e.preventDefault();

        const bookingData = {
            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            recommend: "Unrecooamnd by Acadamic Branch",

        };



        this.props.createAcadamicbooking(bookingData);





    }


    deleteUser = (id) => {
        const { booking } = this.props;

        const bookingData = {


            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            recommend: "Recooamnd by Acadamic Branch"

        };


        this.props.createAcadamicbooking(bookingData);


        fetch('/remove/' + id, { method: "delete" })
            .then(res => res.json())
            .then(res2 => {
                console.log(res2)
                const newWishes = this.state.mywishes.filter(item => {
                    return item._id !== res2._id
                })
                this.setState({
                    mywishes: newWishes
                })
                window.location.reload()
            }).then(
                this.setState({
                    abc: "gfygfyufgyu"

                }),
                console.log(this.state.abc)
            )

    }





    deleteUser1 = (id) => {
        const { booking } = this.props;

        const bookingData = {


            hallname: booking.hallname,
            bookdate: booking.bookdate,
            booktime: booking.booktime,
            reason: booking.reason,
            recommend: "Unrecooamnd by Acadamic Branch"

        };


        this.props.createAcadamicbooking(bookingData);


        fetch('/remove/' + id, { method: "delete" })
            .then(res => res.json())
            .then(res2 => {
                console.log(res2)
                const newWishes = this.state.mywishes.filter(item => {
                    return item._id !== res2._id
                })
                this.setState({
                    mywishes: newWishes
                })
                window.location.reload()
            }).then(
                this.setState({
                    abc: "gfygfyufgyu"

                }),
                console.log(this.state.abc)
            )

    }



    render() {
        const { booking } = this.props;



        return (
            <div className="card card-body bg-light mb-3" >
                <div className="row">

                    <div className="col-4">
                        <p>Hall Name : <strong>{booking.hallname}</strong></p>
                        <p>Booking Date : <strong>{booking.bookdate}</strong></p>
                        <p>Booking Time : <strong>{booking.booktime}</strong></p>
                        <p>Reason : <strong>{booking.reason}</strong></p>
                        {/* <h4>{booking.hallname}</h4>
                        <h4>{booking.bookdate}</h4>
                        <h4>{booking.booktime}</h4>
                        <h4>{booking.reason}</h4> */}

                        <button
                            onClick={() => this.deleteUser(booking._id)}
                            className="btn btn-danger"
                        >
                            Recommand
                        </button>


                        <button
                            onClick={() => this.deleteUser1(booking._id)}
                            className="btn btn-danger"
                        >
                            UnRecommand
                    </button>


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
                        Recoomand
                    </button>

                    <button type="button" class="btn btn-success" onClick={this.onSubmit2}
                    >
                        Unrecommand
                    </button>




                </div>
            </div>
        );
    }
}
Allbookingitem.propTypes = {
    profile: PropTypes.object.isRequired,
    createAcadamicbooking: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createAcadamicbooking, deleteBook }
)(withRouter(Allbookingitem));

