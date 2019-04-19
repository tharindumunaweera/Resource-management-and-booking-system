import { GET_ELEVEN, ELEVEN_LOADING } from "../actions/types";

const initialState = {
  eleven: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ELEVEN_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ELEVEN:
      return {
        ...state,
        eleven: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
