import * as t from './actionTypes';

// redux history state shape

const initialState = {
    isLoading: false,
    payload: {},
    errors: null,
};

const payloadReducer = (state = initialState, action) => {
    switch (action.type) {
    case t.GET_PAYLOAD_INITIATED:
        return {
            ...state,
            isLoading: true,
        };
    case t.GET_PAYLOAD_SUCCEEDED:
        return {
            ...state,
            isLoading: false,
            payload: action.payload,
        };
    case t.GET_PAYLOAD_FAILED:
        return {
            ...state,
            isLoading: false,
            error: [action.payload],
        };
    default:
        return state;
    }
};

export default payloadReducer;
