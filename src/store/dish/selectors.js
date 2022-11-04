import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) =>
  selectDishModule(state).entities[dishId];

export const selectDishsIds = (state) => selectDishModule(state).ids;

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === LoadingStatuses.inProgress;
