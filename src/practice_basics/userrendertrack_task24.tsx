import { useEffect, useRef } from "react";

function useRenderTracker(name) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`${name} rendered ${renderCount.current} times`);
  });

  return renderCount.current;
}

export default useRenderTracker;