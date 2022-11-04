import { normolize } from "../../utils/normolize";
import { selectRestaurantIds } from "../selectors";
import { restaurantSlice } from "../index";

export const loadRestaurantsIfNotExist = (dispatch, getState) => {
  if (selectRestaurantIds(getState())?.length > 0) {
    return;
  }
  dispatch(restaurantSlice.actions.startLoading());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) => {
      console.log(restaurants);
      dispatch(restaurantSlice.actions.successLoading(normolize(restaurants)));
    })
    .catch(() => {
      console.log("error");
      dispatch(restaurantSlice.actions.failLoading());
    });
};
