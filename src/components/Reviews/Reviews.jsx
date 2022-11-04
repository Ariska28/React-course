import React, { useEffect } from "react";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewsByRestaurantId } from "../../store/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/review/selectors";
import { loadReviewsIfNotExist } from "../../store/review/middlewares/loadReviewsIfNotExist";
import { loadUsersIfNotExist } from "../../store/user/middlewares/loadUsersIfNotExist";
import {Link, useParams } from "react-router-dom";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist);
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!reviewIds?.length) {
    return <span>Пусто тут</span>;
  }

  return (
    <div className={styles.root}>
      <h3>Reviews</h3>
      <div className={styles.reviews}>
        {reviewIds.map((id) => (
          <Review key={id} reviewId={id} />
        ))}
      </div>

      <div className={styles.add}>
        <span className={styles.question}>Do you want add review ?</span>
        <Link 
            className={styles.link} 
            to="/reviewForm"
        >
          Add review here
        </Link>
      </div>
    </div>
  );
};
