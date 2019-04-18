import { GET_MUN, MUN_LOADING } from "../actions/types";

const initialState = {
  mun: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MUN_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MUN:
      return {
        ...state,
        mun: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
