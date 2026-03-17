import { useState, useMemo } from "react";
import React from "react";
import useRenderTracker from "./userrendertrack_task24";

const Child = React.memo(function Child({ user }) {
  useRenderTracker("Child");
  return <h3>{user.name}</h3>;
});

function Parent() {
  useRenderTracker("Parent");

  const [count, setCount] = useState(0);

  const user = {
    name: "Raj"
  };

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>
        Increase
      </button>

      <Child user={user} />
    </>
  );
}

export default Parent;