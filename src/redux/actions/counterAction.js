import axios from 'axios';


import {
    ADD_ONE,
    SUBTRACT_ONE,
    ERROR
} from "../types";


const baseURL = "http://localhost:8080";

// Add one to counter ==> counter = counter + 1
export const addOne = num => async dispatch => {
    console.log(`addOne: ${num}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.get(`${baseURL}/countPlus/${num}`, config);
        const data =  response.data;

        dispatch({
            type: ADD_ONE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};

// Subtract one from counter ==> counter = counter - 1
export const subtractOne = num => async dispatch => {
    console.log(`subtractOne: ${num}`);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {

        const response = await axios.get(`${baseURL}/countMinus/${num}`, config);
        const data =  response.data;

        dispatch({
            type: SUBTRACT_ONE,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: error.response
        });
    }
};
