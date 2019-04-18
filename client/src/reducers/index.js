import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import timetableReducer from "./timetableReducer";
import thaReducer from "./thaReducer";
import munReducer from "./munReducer";
import nineReducer from "./nineReducer";
import tenReducer from "./tenReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  timetable: timetableReducer,
  tha: thaReducer,
  mun: munReducer,
  nine: nineReducer,
  ten: tenReducer
});
