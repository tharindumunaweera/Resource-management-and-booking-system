import axios from "axios";

import { GET_MUN, MUN_LOADING } from "./types";

export const getCurrentMun = () => dispatch => {
  dispatch(setMunLoading());
  axios
    .get("/api/mun")
    .then(res =>
      dispatch({
        type: GET_MUN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MUN,
        payload: {}
      })
    );
};

export const createMun = (profileData, history) => dispatch => {
  axios
    .post("/api/mun", profileData)
    .then(res => history.push("/mundashboard"));
};

export const setMunLoading = () => {
  return {
    type: MUN_LOADING
  };
};
