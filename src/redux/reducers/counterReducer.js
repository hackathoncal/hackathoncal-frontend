import {
    ADD_ONE,
    SUBTRACT_ONE,
    ERROR
} from "../types";

const initialState = {
    count: 0,
    error: ""
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                ...state,
                count: action.payload
            };
        case SUBTRACT_ONE:
            return {
                ...state,
                count: action.payload
            };
        case ERROR:
            console.error("Error from counterReducer: " + action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default counterReducer;