import axios from "axios";

import { GET_THA, THA_LOADING, GET_ERRORS } from "./types";

// Get current THA
export const getCurrentTha = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/tha")
    .then(res =>
      dispatch({
        type: GET_THA,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_THA,
        payload: {}
      })
    );
};

// Create Profile
export const createTha = (profileData, history) => dispatch => {
  axios
    .post("/api/tha", profileData)
    .then(res => history.push("/thadashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setProfileLoading = () => {
  return {
    type: THA_LOADING
  };
};
