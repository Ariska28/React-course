import styles from "./styles.module.css";
import classnames from "classnames";
import { SIZES } from "../../constants/ui";

export const Button = ({ children, className, onClick, size = SIZES.m }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames(styles.root, className, styles[size])}
    >
      {children}
    </button>
  );
};
