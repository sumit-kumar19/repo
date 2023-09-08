import { useState } from "react";

const CounterOnClick = () => {
  let [counter, setCount] = useState(0);

  const setCountHandler = () => {
    setCount(counter + 1);
  };

  return (
    <div>
      <p>Count is: {counter}</p>
      <button onClick={setCountHandler}>Click to increment</button>
    </div>
  );
};

export default CounterOnClick;
