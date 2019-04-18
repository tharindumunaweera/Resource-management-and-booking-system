import axios from "axios";

import { GET_TEN, TEN_LOADING } from "./types";

export const getCurrentTen = () => dispatch => {
  dispatch(setTenLoading());
  axios
    .get("/api/ten")
    .then(res =>
      dispatch({
        type: GET_TEN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TEN,
        payload: {}
      })
    );
};

export const createTen = (profileData, history) => dispatch => {
  axios
    .post("/api/ten", profileData)
    .then(res => history.push("/tendashboard"));
};

export const setTenLoading = () => {
  return {
    type: TEN_LOADING
  };
};
