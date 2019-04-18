import {
  GET_THA,
  THA_LOADING
  //CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialState = {
  tha: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case THA_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_THA:
      return {
        ...state,
        tha: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
