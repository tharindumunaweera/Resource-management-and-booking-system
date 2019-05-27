import axios from "axios";

import { GET_ERRORS } from "./types";

export const createBooking = (profileData, history) => dispatch => {
  axios
    .post("/api/booking", profileData)
    .then(res => history.push("/refdashboard"));
   
};
