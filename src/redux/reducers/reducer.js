import {
    // Scenarios:
    CREATE_SCENARIO,
    GET_SCENARIOS_LIST,
    GET_SCENARIO,
    EDIT_SCENARIO,
    DELETE_SCENARIO,
    CLEAR_FILTER,
    SET_CUR_SCENARIO,

    // Nodes:
    GET_NODE_LIST,
    CREATE_NODE,
    GET_NODE,
    UPDATE_NODE,
    DELETE_NODE,

    // Options:
    CREATE_OPTION,
    UPDATE_OPTION,
    DELETE_OPTION,

    // Tags:    
    GET_TAGS_LIST,

    // Categories:
    GET_CATEGORIES_LIST,

    // Error:
    ERROR, SET_FILTER
} from "../types";

const initialState = {
    scenarios: [],
    curScenario: null,
    filterScenarios: [],
    nodes: [],
    curNode: null,
    curOption: null,
    tags: [],
    categories: [],
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Scenarios:
        case CREATE_SCENARIO:
            return {
                ...state,
                curScenario: action.payload
            };

        case GET_SCENARIOS_LIST:
            return {
                ...state,
                scenarios: action.payload,
                filterScenarios: action.payload
            };

        case SET_FILTER:
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    filterScenarios: action.payload
                };
            } else {
                return {
                    ...state,
                    filterScenarios: [action.payload]
                };
            }

        case CLEAR_FILTER:
            return {
                ...state,
                filterScenarios: state.scenarios
            };

        case GET_SCENARIO:
            return {
                ...state,
                curScenario: action.payload
            };
        case SET_CUR_SCENARIO:
            return {
                ...state,
                curScenario: action.payload
            };

        case EDIT_SCENARIO:
            return {
                ...state,
                curScenario: action.payload
            };

        case DELETE_SCENARIO:
            return {
                ...state,
                curScenario: action.payload
            };

        // Nodes:
        case GET_NODE_LIST:
            return {
                ...state,
                nodes: action.payload
            };
        case CREATE_NODE:
            return {
                ...state,
                curNode: action.payload
            };

        case GET_NODE:
            return {
                ...state,
                curNode: action.payload
            };

        case UPDATE_NODE:
            return {
                ...state,
                curNode: action.payload
            };

        case DELETE_NODE:
            return {
                ...state,
                curNode: action.payload
            };

        // Options:
        case CREATE_OPTION:
            return {
                ...state,
                curOption: action.payload
            };

        case UPDATE_OPTION:
            return {
                ...state,
                curOption: action.payload
            };

        case DELETE_OPTION:
            return {
                ...state,
                curOption: action.payload
            };

        // Tags:
        case GET_TAGS_LIST:
            return {
                ...state,
                tags: action.payload
            };

        // Categories:
        case GET_CATEGORIES_LIST:
            return {
                ...state,
                categories: action.payload
            };

        // Errors:    
        case ERROR:
            console.error("Error from reducer: " + action.payload);
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;