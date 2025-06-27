import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("useState Render");
  return (
    <div>
      <div>Count -{count}</div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increase
      </button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(5)}>increase 5</button>
    </div>
  );
};

export default UseState;
