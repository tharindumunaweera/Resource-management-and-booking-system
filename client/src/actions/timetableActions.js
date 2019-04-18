import axios from "axios";

import { GET_TIMETABLE, TIMETABLE_LOADING, GET_ERRORS } from "./types";

// Get time table
export const getCurrentTimetable = () => dispatch => {
  dispatch(setTimetableLoading());
  axios
  .get("/api/timetable")
  .then(res =>
    dispatch({
      type: GET_TIMETABLE,
      payload: res.data
    })
    .catch(err =>
      dispatch({
        type: GET_TIMETABLE,
        payload: {}
      })
    )
  );
};

// Create Timetable
export const createTimetable = (timetableData, history) => dispatch => {
  axios
    .post("/api/timetable", timetableData)
    .then(res => history.push("/timetable"));
};

export const setTimetableLoading = () => {
  return {
    type: TIMETABLE_LOADING
  };
};
