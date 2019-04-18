import { GET_NINE, NINE_LOADING } from "../actions/types";

const initialState = {
  nine: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NINE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_NINE:
      return {
        ...state,
        nine: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
