import axios from "axios";

import { GET_DIRECTORBOOKING, DIRECTORBOOKING_LOADING, GET_ERRORS, GET_DIRECTORBOOKINGS } from "./types";


export const getCurrentDirectorbooking = () => dispatch => {
    dispatch(setDirectorbookingLoading());
    axios
        .get("/api/directorbooking")
        .then(res =>
            dispatch({
                type: GET_DIRECTORBOOKING,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_DIRECTORBOOKING,
                payload: {}
            })
        );
};

export const createDirectorbooking = (profileData, history) => dispatch => {
    axios
        .post("/api/directorbooking", profileData)


};


export const getDirectorBookings = id => dispatch => {
    dispatch(setDirectorbookingLoading());
    axios
        .get("/api/directorbooking/all")
        .then(res =>
            dispatch({
                type: GET_DIRECTORBOOKINGS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_DIRECTORBOOKINGS,
                payload: null
            })
        );
};



export const setDirectorbookingLoading = () => {
    return {
        type: DIRECTORBOOKING_LOADING
    };
};
