import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log("reRender of the component");
  return (
    <div>
        <h1></h1>
      <div>{count}</div>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    
    </div>
  );
};

export default UseReducer;
