import { useState, useCallback } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  return { count, increment, decrement };
}

export default useCounter;
