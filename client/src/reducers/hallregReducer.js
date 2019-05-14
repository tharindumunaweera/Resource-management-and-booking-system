import { GET_HALLREG, HALLREG_LOADING } from "../actions/types";

const initialState = {
  hallreg: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HALLREG_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_HALLREG:
      return {
        ...state,
        hallreg: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
