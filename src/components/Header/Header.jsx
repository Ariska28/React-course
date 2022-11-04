import styles from "./styles.module.css";
import classnames from "classnames";

import { ReactComponent as Logo } from "./imgs/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = ({ className }) => {

  return (
    <header className={classnames(styles.header, className)}>
      <Logo />
      <div className={styles.list}>
        <NavLink 
          className={({isActive}) => classnames(styles.link, {
            [styles.active]: isActive,
          })} 
          to="/restaurants"
        >
          Restaurants
        </NavLink>

        <NavLink 
          className={({isActive}) => classnames(styles.link, {
            [styles.active]: isActive,
          })} 
          to="/cart"
        >
          Cart
        </NavLink>
      </div>
    </header>
  );
};
