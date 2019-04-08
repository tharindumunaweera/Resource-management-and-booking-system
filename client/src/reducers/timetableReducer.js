import {
    GET_TIMETABLE,
    CLEAR_CURRENT_TIMETABLE,
    TIMETABLE_LOADING
  } from "../actions/types";
  
  const initialState = {
    timetable: null,
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
    case TIMETABLE_LOADING:
      return {
        ...state,
        loading: true
      };
      case GET_TIMETABLE:
        return {
          ...state,
          timetable: action.payload,
          loading: false
        };
      case CLEAR_CURRENT_TIMETABLE:
        return {
          ...state,
          timetable: null
        };
      default:
        return state;
    }
  }