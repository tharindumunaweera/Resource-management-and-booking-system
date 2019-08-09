import axios from "axios";

import { GET_ACADAMICBOOKING, ACADAMICBOOKING_LOADING, GET_ERRORS, GET_ACADAMICBOOKINGS } from "./types";


export const getCurrentAcadamicbooking = () => dispatch => {
    dispatch(setAcadamicbookingLoading());
    axios
        .get("/api/acadamicbooking")
        .then(res =>
            dispatch({
                type: GET_ACADAMICBOOKING,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ACADAMICBOOKING,
                payload: {}
            })
        );
};

export const createAcadamicbooking = (profileData, history) => dispatch => {
    axios
        .post("/api/acadamicbooking", profileData)


};


export const getAcadamicBookings = id => dispatch => {
    dispatch(setAcadamicbookingLoading());
    axios
        .get("/api/booking/acadamicbooking")
        .then(res =>
            dispatch({
                type: GET_ACADAMICBOOKINGS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ACADAMICBOOKINGS,
                payload: null
            })
        );
};



export const setAcadamicbookingLoading = () => {
    return {
        type: ACADAMICBOOKING_LOADING
    };
};
