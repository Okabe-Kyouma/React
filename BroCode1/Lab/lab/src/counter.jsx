import { useState } from "react";

let Counter = () => {
  let [x, setX] = useState(10);

  let increment = () => {
    setX(x + 1);
    console.log("clicked");
    console.log(x);
  };

  return (
    <>
      <h3>count = {x}</h3>
      <button onClick={increment}>increment</button>
    </>
  );
};

export default Counter;
