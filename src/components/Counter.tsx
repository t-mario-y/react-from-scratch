import React, { useState } from "react";

export const Counter = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <div className="App">
      <h2>Counter with hooks</h2>
      <p data-testid="countValue">{count}</p>
      <button data-testid="decrement" onClick={decrement}>
        -
      </button>
      <button data-testid="increment" onClick={increment}>
        +
      </button>
    </div>
  );
};
