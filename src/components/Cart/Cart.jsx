import { useSelector } from "react-redux";
import { selectCartDishIds } from "../../store/cart/selectors";
import { CartItem } from "../CartItem/CartItem";
import styles from "./styles.module.css"

export const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);

  if(!dishIds?.length) {
    return <div>Cart is empty, please add porchase for order</div>
  }

  return (
    <div className={styles.cart}>
      {dishIds.length && dishIds.map((id) => <CartItem key={id} dishId={id} />)}
    </div>
  );
};
