import React, { useEffect } from "react";
import { Dish } from "../Dish/Dish";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuByRestaurantId } from "../../store/restaurant/selectors";
import { selectIsDishLoading } from "../../store/dish/selectors";
import { loadDishesIfNotExist } from "../../store/dish/middlewares/loadDishesIfNotExist";
import {useParams } from "react-router-dom";

export const Menu = () => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();
  const dishIds = useSelector((state) =>
    selectMenuByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(loadDishesIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <span>Loading....</span>;
  }

  if (!dishIds?.length) {
    return <span>Пусто тут</span>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Menu</h3>
      <div className={styles.list}>
        {dishIds.map((id) => (
          <Dish key={id} dishId={id} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
