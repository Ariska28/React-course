import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantDescriptionById, selectRestaurantNameById } from "../../store/restaurant/selectors";
import * as classnames from 'classnames'
import styles from "./styles.module.css"
import { NavLink, Outlet, useParams } from "react-router-dom";
import { RestaurantRating } from "../../containers/RestaurantRating/RestaurantRating";

export const Restaurant = () => {
  const { restaurantId } = useParams();

  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, { restaurantId })
  );

  const restaurantDescription = useSelector((state) => 
    selectRestaurantDescriptionById(state, { restaurantId })
  )

  if (!restaurantName) {
    return <span>Not found restaurant</span>;
  }

  return (
    <div>
      <h2 className={styles.title}>{restaurantName}</h2>
      <div className={styles.description}>{restaurantDescription}</div>
      <div className={styles.rating}><p>{restaurantName} rating: </p><RestaurantRating/></div>
      <div className={styles.list}>
        <NavLink 
           className={({isActive}) => classnames(styles.link, {
            [styles.active]: isActive,
          })} 
          to="menu"
        > 
          Menu
        </NavLink>

        <NavLink 
          className={({isActive}) => classnames(styles.link, {
            [styles.active]: isActive,
          })}
          to="review"
        >   
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};
