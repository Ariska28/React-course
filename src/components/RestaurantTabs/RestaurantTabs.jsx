import { useSelector } from "react-redux";
import { selectRestaurantIdsFilteredByName} from "../../store/restaurant/selectors";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.css"

export const RestaurantTabs = () => {
  const [search] = useSearchParams();

  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      restaurantName: search.get("restaurantName") || "",
    })
  );

  return (
    <div className={styles.container}>
      {restaurantIds.map((id) => (
        <RestaurantTab key={id} restaurantId={id} />
      ))}
    </div>
  );
};
