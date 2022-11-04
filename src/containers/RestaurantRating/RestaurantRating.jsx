import { Rating } from "../../components/Rating/Rating";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsReviewLoading } from "../../store/review/selectors";
import { useCallback, useEffect } from "react";
import { loadReviewsIfNotExist } from "../../store/review/middlewares/loadReviewsIfNotExist";
import { selectRestaurantRatingMemoCreater } from "../../store/restaurant/selectors";

export const RestaurantRating = (props) => {
  const { restaurantId } = useParams();

  const selectRating = useCallback(selectRestaurantRatingMemoCreater(), []);

  const rating = useSelector((state) => selectRating(state, { restaurantId }));

  const isLoading = useSelector(selectIsReviewLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Rating {...props} value={rating} />;
};
