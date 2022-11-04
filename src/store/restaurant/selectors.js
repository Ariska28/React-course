import { LoadingStatuses } from "../constants/loadingStatuses";
import { selectReviewEntities } from "../review/selectors";
import { createSelector } from "reselect";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantNameById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.name;

  export const selectRestaurantDescriptionById = (state, {restaurantId}) =>
  selectRestaurantById(state, {restaurantId})?.description;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantIdsFilteredByName = (
  state,
  { restaurantName }
) => {
  return Object.values(selectRestaurantModule(state).entities)
    .filter(
      ({ name }) =>
        name.toLowerCase().indexOf(restaurantName.toLowerCase()) !== -1
    )
    .map(({ id }) => id);
};

export const selectMenuByRestaurantId = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectReviewsByRestaurantId = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state) =>
  selectRestaurantModule(state).status;

export const selectIsRestaurantLoading = (state) =>
  selectRestaurantModule(state).status === LoadingStatuses.inProgress;

export const selectRestaurantRating = (state, { restaurantId }) => {
  const restaurantReviewIds = selectReviewsByRestaurantId(state, {
    restaurantId,
  });
  const reviewEntities = selectReviewEntities(state);

  return Math.floor(
    restaurantReviewIds.reduce(
      (ratingSum, reviewId) =>
        ratingSum + reviewEntities[reviewId]?.rating || 0,
      0
    ) / restaurantReviewIds.length
  );
};

export const selectRestaurantRatingMemoCreater = () =>
  createSelector(
    [selectReviewsByRestaurantId, selectReviewEntities],
    (restaurantReviewIds, reviewEntities) =>
      Math.floor(
        restaurantReviewIds.reduce(
          (ratingSum, reviewId) =>
            ratingSum + reviewEntities[reviewId]?.rating || 0,
          0
        ) / restaurantReviewIds.length
      )
  );
