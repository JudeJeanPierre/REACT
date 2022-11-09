import React, { useReducer } from "react";
import Child from './Child';
import CounterContext from '../contexts/CounterContext';
const Parent = () => {
  // Create reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return (state = state + 1);
      case "SUBTRACT":
        return (state = state - 1);
      default:
        return state;
    }
  };
  // Define the initial state
  const initialState = 0;
  // INITIALIZE THE HOOK
  const [state, dispatch] = useReducer(reducer, initialState);
  // Render component
  return (
    <>
      <CounterContext.Provider value={{ state, dispatch }}>
        <Child />
      </CounterContext.Provider>
    </>
  );
};
export default Parent;