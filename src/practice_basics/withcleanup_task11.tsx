import { useState, useEffect } from "react";

function WithCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running");
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleanup running");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h3>With Cleanup</h3>
      <h2>Count: {count}</h2>
    </>
  );
}

export default WithCleanup;