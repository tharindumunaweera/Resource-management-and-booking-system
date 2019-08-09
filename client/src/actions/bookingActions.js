import axios from "axios";

import { GET_BOOKING, BOOKING_LOADING, GET_ERRORS, GET_BOOKINGS } from "./types";


export const getCurrentBooking = () => dispatch => {
  dispatch(setBookingLoading());
  axios
    .get("/api/booking")
    .then(res =>
      dispatch({
        type: GET_BOOKING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BOOKING,
        payload: {}
      })
    );
};

export const createBooking = (profileData, history) => dispatch => {
  axios
    .post("/api/booking", profileData);
    

};


export const getBookings = id => dispatch => {
  dispatch(setBookingLoading());
  axios
    .get("/api/booking/all")
    .then(res =>
      dispatch({
        type: GET_BOOKINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BOOKINGS,
        payload: null
      })
    );
};



export const setBookingLoading = () => {
  return {
    type: BOOKING_LOADING
  };
};
