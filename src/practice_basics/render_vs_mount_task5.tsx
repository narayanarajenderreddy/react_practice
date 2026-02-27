import { useState, useEffect } from "react";

function Child() {
  console.log("Child Rendered");

  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);

  return <h3>I am Child</h3>;
}

function Parent() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  console.log("Parent Rendered");

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase Count
      </button>

      <button onClick={() => setShow(prev => !prev)}>
        Toggle Child
      </button>

      {show && <Child />}
    </>
  );
}

export default Parent;