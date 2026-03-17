import { useState } from "react";

function Child() {
  console.log("Child rendered");
  return <h3>I am Child Component</h3>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child />
    </>
  );
}

export default Parent;