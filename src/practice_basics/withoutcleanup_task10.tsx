import { useState, useEffect } from "react";

function WithoutCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running");
      setCount(prev => prev + 1);
    }, 1000);

    // ❌ No cleanup here
  }, []);

  return (
    <>
      <h3>Without Cleanup</h3>
      <h2>Count: {count}</h2>
    </>
  );
}

export default WithoutCleanup;