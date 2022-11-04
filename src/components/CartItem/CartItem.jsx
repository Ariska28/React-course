import { useSelector } from "react-redux";
import { selectCartDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/dish/selectors";
import styles from "./styles.module.css";

export const CartItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) => selectCartDishCount(state, { dishId }));

  if (!dish) {
    return <span>Cart not found</span>;
  }

  return (
    <div className={styles.item}>
      <span className={styles.text}>
        {dish.name}
      </span>

      <span className={styles.text}>
        {count}
      </span>
    </div>
  );
};
