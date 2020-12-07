import * as t from './actionTypes';

// redux history state shape

const initialState = {
    isLoading: false,
    history: {},
    errors: null,
};

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
    case t.GET_HISTORY_INITIATED:
        return {
            ...state,
            isLoading: true,
        };
    case t.GET_HISTORY_SUCCEEDED:
        return {
            ...state,
            isLoading: false,
            history: action.payload,
        };
    case t.GET_HISTORY_FAILED:
        return {
            ...state,
            isLoading: false,
            error: [action.payload],
        };
    default:
        return state;
    }
};

export default historyReducer;
