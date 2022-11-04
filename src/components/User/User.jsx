import { useSelector } from "react-redux";
import { selectUserById } from "../../store/user/selectors";
import styles from "./styles.module.css"

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, { userId }));

  if (!user) {
    return <span>Not Found</span>;
  }

  return <div className={styles.user}>By {user.name}</div>;
};
