import { GET_TEN, TEN_LOADING } from "../actions/types";

const initialState = {
  ten: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEN_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TEN:
      return {
        ...state,
        ten: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
