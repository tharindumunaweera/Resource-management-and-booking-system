import axios from "axios";

import { GET_TIMETABLE, TIMETABLE_LOADING } from "./types";

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

export const setTimetableLoading = () => {
  return {
    type: TIMETABLE_LOADING
  };
};
