import {
    // Scenarios:
    CREATE_SCENARIO,
    GET_SCENARIOS_LIST,
    GET_SCENARIO,
    EDIT_SCENARIO,
    DELETE_SCENARIO,
    
    // Nodes:
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
    ERROR
} from "../types";

const initialState = {
    scenarios: "",
    curScenario: null, // TODO: should there be curScenarioID as well??
    curNode: null,//""
    curOption: null,//""
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
                scenarios:  action.payload
            };

        case GET_SCENARIO:
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