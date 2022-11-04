import { useCallback, useState } from "react";

export const useCount = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const decrement = useCallback(() => {
    setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
  }, []);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return { count, increment, decrement };
};
