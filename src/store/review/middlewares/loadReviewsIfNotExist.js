import { normolize } from "../../utils/normolize";
import { selectReviewsIds } from "../selectors";
import { selectReviewsByRestaurantId } from "../../restaurant/selectors";
import { reviewSlice } from "../index";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const restaurantReviewIds = selectReviewsByRestaurantId(getState(), {
    restaurantId: restaurantId,
  });
  const loadedReviewIds = selectReviewsIds(getState()) || [];

  if (
    restaurantReviewIds?.every((restaurantReviewId) =>
      loadedReviewIds.includes(restaurantReviewId)
    )
  ) {
    return;
  }

  dispatch(reviewSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => {
      console.log(reviews);
      dispatch(reviewSlice.actions.successLoading(normolize(reviews)));
    })
    .catch(() => {
      console.log("error");
      dispatch(reviewSlice.actions.failLoading());
    });
};
