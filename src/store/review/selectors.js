import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewEntities = (state) =>
  selectReviewModule(state).entities;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewEntities(state)[reviewId];

export const selectReviewsIds = (state) => selectReviewModule(state).ids;

export const selectReviewLoadingStatus = (state) =>
  selectReviewModule(state).status;

export const selectIsReviewLoading = (state) =>
  selectReviewLoadingStatus(state) === LoadingStatuses.inProgress;
