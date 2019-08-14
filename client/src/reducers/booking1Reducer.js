import { GET_BOOKING1, BOOKING1_LOADING, GET_BOOKINGS1 } from "../actions/types";

const initialState = {
    bookings1: null,
    booking1: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BOOKING1_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_BOOKING1:
            return {
                ...state,
                booking1: action.payload,
                loading: false
            };
        case GET_BOOKINGS1:
            return {
                ...state,
                bookings1: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
