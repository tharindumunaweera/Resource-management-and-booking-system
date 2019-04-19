import axios from "axios";

import { GET_ELEVEN, ELEVEN_LOADING } from "./types";

export const getCurrentEleven = () => dispatch => {
  dispatch(setElevenLoading());
  axios
    .get("/api/eleven")
    .then(res =>
      dispatch({
        type: GET_ELEVEN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ELEVEN,
        payload: {}
      })
    );
};

export const createEleven = (profileData, history) => dispatch => {
  axios
    .post("/api/eleven", profileData)
    .then(res => history.push("/elevendashboard"));
};

export const setElevenLoading = () => {
  return {
    type: ELEVEN_LOADING
  };
};
