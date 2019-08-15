import { GET_DIRECTORBOOKING, DIRECTORBOOKING_LOADING, GET_DIRECTORBOOKINGS } from "../actions/types";

const initialState = {
    directorbookings: null,
    directorbooking: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DIRECTORBOOKING_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_DIRECTORBOOKING:
            return {
                ...state,
                directorbooking: action.payload,
                loading: false
            };
        case GET_DIRECTORBOOKINGS:
            return {
                ...state,
                directorbookings: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
