import axios from "axios";

import { GET_HALLREG, HALLREG_LOADING, GET_ERRORS, } from "./types";

export const getCurrentHallreg = () => dispatch => {
  dispatch(setHallregLoading());
  axios
    .get("/api/hallreg")
    .then(res =>
      dispatch({
        type: GET_HALLREG,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_HALLREG,
        payload: {}
      })
    );
};

export const createHallreg = (profileData, history) => dispatch => {
  axios
    .post("/api/hallreg", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setHallregLoading = () => {
  return {
    type: HALLREG_LOADING
  };
};
