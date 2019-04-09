import axios from "axios";

import { GET_TIMETABLE, TIMETABLE_LOADING, GET_ERRORS } from "./types";

// Get time table
export const getCurrentTimetable = () => dispatch => {
  dispatch(setTimetableLoading());
  axios
    .get("/api/profile/timetable")
    .then(res =>
      dispatch({
        type: GET_TIMETABLE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TIMETABLE,
        payload: {}
      })
    );
};

// Create Timetable
export const createTimetable = (profileData, history) => dispatch => {
  axios
    .post("/api/profile/timetable", profileData)
    .then(res => history.push("/timetable"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setTimetableLoading = () => {
  return {
    type: TIMETABLE_LOADING
  };
};
