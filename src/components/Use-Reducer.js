import React from 'react';
import { useReducer } from 'react';


//1. InitState
//2.Action
//3.Reducer
//4. Dispatch


const initialState = {
    job: '',
    jobs: []
}
const SET_JOB = 'SET_JOB';
const ADD_JOB = 'ADD_JOB';
const DELETE_JOB = 'DELETE_JOB';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload: payload
    }
}
let newState;
const reducer = (state, action) => {
    console.log("action :",action);
    console.log("state :",action);
    switch(action.type){
        case SET_JOB:
             newState={
                ...state,
                job:action.payload
            }
            break;
            default:
                throw new Error("Invalid Action");
    }
    console.log("newState",newState)
    return newState
}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { job, jobs } = state

    return (
        <div>
            <h3>ToDoList</h3>
            <input type="text"
                value={job}
                onChange={(e) =>
                    //e.target.value
                    dispatch(setJob(e.target.value))}
                placeholder='Enter todo' />
            <button>Add</button>
            <ul>
                {jobs.map((pre, index) => (
                    <li key={index}>{pre} &times;</li>))}
            </ul>
        </div>
    );
}

export default UseReducer;
