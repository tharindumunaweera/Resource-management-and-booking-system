import { GET_BOOKING, BOOKING_LOADING, GET_BOOKINGS } from "../actions/types";

const initialState = {
    bookings: null,
    booking: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case BOOKING_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_BOOKING:
            return {
                ...state,
                booking: action.payload,
                loading: false
            };
        case GET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
