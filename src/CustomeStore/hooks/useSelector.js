import { useContext, useEffect, useId, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";

export const useSelector = (selector, equalityFn = (a, b) => a === b) => {
  const store = useContext(StoreContext);
  const id = useId();
  const [valueObj, setValueObj] = useState();

  useEffect(() => {
    return store.subscribe(id, (state) => {
      const newValue = selector(state);
      if (!equalityFn(valueObj?.value, newValue)) {
        setValueObj({
          value: newValue,
        });
      }
    });
  }, []);

  return valueObj?.value;
};
