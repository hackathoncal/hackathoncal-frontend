import axios from 'axios';


import {
    // Scenarios:
    CREATE_SCENARIO,
    GET_SCENARIOS_LIST,
    GET_SCENARIO,
    EDIT_SCENARIO,
    DELETE_SCENARIO,
    SET_FILTER,
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
    ERROR
} from "../types";


const baseURL = "http://localhost:5000";

// Scenarios:
export const createScenario = (curScenario) => async dispatch => {
    // console.log(`Adding Scenario... ${curScenario}`);
    console.log(curScenario);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        // Validate data..

        // const response = await axios.post(`${baseURL}/scenarios`, curScenario, config);
        // const data =  response.data;

        dispatch({
            type: CREATE_SCENARIO,
            payload: curScenario
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

export const getScenariosList = () => async dispatch => {
    console.log(`Getting scenarios list..`);
    try {

        const response = await axios.get(`${baseURL}/scenarios`);
        const data = response.data;
        console.log(response.data);
        dispatch({
            type: GET_SCENARIOS_LIST,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const getScenario =(scenarioID) => async dispatch =>  {
    console.log(`Getting scenario by ID: ${scenarioID}`);
    try {

        const response = await axios.get(`${baseURL}/scenarios/${scenarioID}`);
        const data = response.data;

        dispatch({
            type: GET_SCENARIO,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const setCurScenario = (scenario) =>  {
    return {
        type: SET_CUR_SCENARIO,
        payload: scenario
    }
};

const editScenario = (scenarioID) => async dispatch => {
    console.log(`Edit scenario (ID): ${scenarioID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.put(`${baseURL}/scenarios/${scenarioID}`, config);
        const data = response.data;

        dispatch({
            type: EDIT_SCENARIO,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const deleteScenario = (scenarioID) => async dispatch => {
    console.log(`Deleting scenario (ID): ${scenarioID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.delete(`${baseURL}/scenarios/${scenarioID}`, config);
        const data = response.data;

        dispatch({
            type: DELETE_SCENARIO,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};


const setFilterScenarios = (scenarios) => {
    return {
        type: SET_FILTER,
        payload: scenarios
    }
};

const clearFilterScenarios = () => {
    return {
        type: CLEAR_FILTER
    }
};


// Nodes:
const getNodeList = () => async dispatch => {
    try {
        const response = await axios.get(`${baseURL}/nodes`);
        const data = response.data;
        dispatch({
            type: GET_NODE_LIST,
            payload: data
        });
    }
    catch (e) {
        dispatch({
            type: ERROR,
            payload: e.response
        });
    }
};

const createNode = (curNode) => async dispatch => {
    console.log(`Create node... ${curNode}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        // Validate data..

        const response = await axios.post(`${baseURL}/nodes`, curNode, config);
        const data = response.data;

        dispatch({
            type: CREATE_NODE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const getNode = (nodeID) => async dispatch => {
    console.log(`Getting node by ID: ${nodeID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.get(`${baseURL}/nodes/${nodeID}`, config);
        const data = response.data;

        dispatch({
            type: GET_NODE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const updateNode = (nodeID, curNode) => async dispatch => {
    console.log(`Updating node (ID): ${nodeID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.put(`${baseURL}/nodes/${nodeID}`, curNode, config);
        const data = response.data;

        dispatch({
            type: UPDATE_NODE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const deleteNode = (nodeID) => async dispatch => {
    console.log(`Deleting node (ID): ${nodeID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.delete(`${baseURL}/nodes/${nodeID}`, config);
        const data = response.data;

        dispatch({
            type: DELETE_NODE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

// Options:
const createOption = (curOption) => async dispatch => {
    console.log(`Create option... ${curOption}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        // Validate data..

        const response = await axios.post(`${baseURL}/options`, curOption, config);
        const data = response.data;

        dispatch({
            type: CREATE_OPTION,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const updateOption = (optionID, curOption) => async dispatch => {
    console.log(`Updating option (ID): ${optionID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.put(`${baseURL}/options/${optionID}`, curOption, config);
        const data = response.data;

        dispatch({
            type: UPDATE_OPTION,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

const deleteOption = (optionID) => async dispatch => {
    console.log(`Deleting node (ID): ${optionID}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.delete(`${baseURL}/options/${optionID}`, config);
        const data = response.data;

        dispatch({
            type: DELETE_OPTION,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

// Tags:
const getTagsList = () => async dispatch => {
    console.log(`Getting tags list..`);
    try {

        const response = await axios.get(`${baseURL}/tags`);
        const data = response.data;

        dispatch({
            type: GET_TAGS_LIST,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

// Categories:
const getCategoriesList = () => async dispatch => {
    console.log(`Getting categories list..`);
    try {

        const response = await axios.get(`${baseURL}/categories`);
        const data = response.data;

        dispatch({
            type: GET_CATEGORIES_LIST,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

export default {
    getScenariosList,
    getCategoriesList,
    getTagsList,
    setFilterScenarios,
    clearFilterScenarios,
    setCurScenario,
    getNodeList
};