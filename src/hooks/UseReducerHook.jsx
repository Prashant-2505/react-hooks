import React, { useReducer } from 'react';

const UseReducerHook = () => {
    const initialState = {
        count: 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { count: state.count + 1 };
            case 'sub':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            case 'show':
                return state;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Use Reducer hook</h1>
            <p>
                The useReducer hook in React is a state management hook that provides a way to manage state in a more controlled and organized manner, especially when dealing with complex state logic. It is an alternative to the useState hook, and it's particularly useful when state transitions involve multiple sub-states or when the logic is more intricate.
            </p>

            <p>
                The main purpose of useReducer is to handle state changes based on dispatched actions. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function. The reducer function takes the current state and an action as parameters and returns the new state based on the action type.
            </p>

            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'add' })}>Increase count</button>
            <button onClick={() => dispatch({ type: 'sub' })}>Decrease count</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset count</button>
            <button onClick={() => dispatch({ type: 'show' })}>Show count</button>
        </div>
    );
};

export default UseReducerHook;
