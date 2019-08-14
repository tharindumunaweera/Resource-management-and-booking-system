import axios from "axios";

import { GET_BOOKING1, BOOKING1_LOADING, GET_ERRORS, GET_BOOKINGS1 } from "./types";


export const getCurrentBooking1 = () => dispatch => {
    dispatch(setBooking1Loading());
    axios
        .get("/api/booking1")
        .then(res =>
            dispatch({
                type: GET_BOOKING1,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_BOOKING1,
                payload: {}
            })
        );
};

export const createBooking1 = (profileData, history) => dispatch => {
    axios
        .post("/api/booking1", profileData);


};


export const getBookings1 = id => dispatch => {
    dispatch(setBooking1Loading());
    axios
        .get("/api/booking1/all")
        .then(res =>
            dispatch({
                type: GET_BOOKINGS1,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_BOOKINGS1,
                payload: null
            })
        );
};

export const deleteBooking = () => dispatch => {

    axios
        .delete("/api/booking1")


};

export const setBooking1Loading = () => {
    return {
        type: BOOKING1_LOADING
    };
};


export const deleteBook = id => {
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
        }).then(
            this.setState({
                abc: "gfygfyufgyu"

            }),
            console.log(this.state.abc)
        )
};