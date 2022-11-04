import { Button } from "../Button/Button";
import classnames from "classnames";

import styles from "./styles.module.css";
import { useCount } from "../../hooks/useCount";

export const Ingredient = ({ name, className }) => {
  const { count, increment, decrement } = useCount(1);

  return (
    <div className={classnames(styles.root, className)}>
      <div>{name}</div>
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
