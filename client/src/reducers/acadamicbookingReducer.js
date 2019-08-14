import { GET_ACADAMICBOOKING, ACADAMICBOOKING_LOADING, GET_ACADAMICBOOKINGS } from "../actions/types";

const initialState = {
    acadamicbookings: null,
    acdamicbooking: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACADAMICBOOKING_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_ACADAMICBOOKING:
            return {
                ...state,
                acadamicbooking: action.payload,
                loading: false
            };
        case GET_ACADAMICBOOKINGS:
            return {
                ...state,
                acadamicbookings: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
