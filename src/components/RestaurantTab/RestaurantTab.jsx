import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/restaurant/selectors";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import styles from "./styles.module.css";

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  return (
    <NavLink
      className={({ isActive }) =>
        classnames(styles.link, {
          [styles.active]: isActive,
        })
      }
      to={restaurantId}
    >
      {restaurant?.name}
    </NavLink>
  );
};
