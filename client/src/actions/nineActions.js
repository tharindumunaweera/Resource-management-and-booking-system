import axios from "axios";

import { GET_NINE, NINE_LOADING } from "./types";

export const getCurrentNine = () => dispatch => {
  dispatch(setNineLoading());
  axios
    .get("/api/nine")
    .then(res =>
      dispatch({
        type: GET_NINE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_NINE,
        payload: {}
      })
    );
};

export const createNine = (profileData, history) => dispatch => {
  axios
    .post("/api/nine", profileData)
    .then(res => history.push("/AcademicStaff"));
};

export const setNineLoading = () => {
  return {
    type: NINE_LOADING
  };
};
