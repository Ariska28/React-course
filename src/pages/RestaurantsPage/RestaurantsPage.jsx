import { Restaurant } from "../../components/Restaurant/Restaurant";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRestaurantLoading,
  selectRestaurantIds,
} from "../../store/restaurant/selectors";
import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { loadRestaurantsIfNotExist } from "../../store/restaurant/middlewares/loadRestaurantsIfNotExist";
import { Outlet } from "react-router-dom";
import { SearchForn } from "../../components/SearchForm/SearchForn";

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const restaurantIds = useSelector(selectRestaurantIds);
  const isLoading = useSelector(selectIsRestaurantLoading);
  let [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  useEffect(() => {
    dispatch(loadRestaurantsIfNotExist);
  }, []);

  if (isLoading) {
    return <span>Loading.....</span>;
  }

  if (!restaurantIds?.length) {
    return <span>Empty</span>;
  }

  return (
    <div className={styles.root}>
      <SearchForn />
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        onRestaurantSelect={setActiveRestaurantId}
      />
      <Outlet />
    </div>
  );
};
