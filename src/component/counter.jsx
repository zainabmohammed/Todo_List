import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handeldecrement() {
    setCount(count - 1);
  }
  function handelIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handeldecrement}>decrease</button>
      <span>{count}</span>
      <button onClick={handelIncrement}>increase</button>
    </div>
  );
}

export default Counter;
