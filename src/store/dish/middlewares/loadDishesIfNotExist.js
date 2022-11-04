import { normolize } from "../../utils/normolize";
import { selectDishsIds } from "../selectors";
import { selectMenuByRestaurantId } from "../../restaurant/selectors";
import { dishSlice } from "../index";

export const loadDishesIfNotExist = (restaurantId) => (dispatch, getState) => {
  const restaurantDishIds = selectMenuByRestaurantId(getState(), {
    restaurantId,
  });
  const loadedDishIds = selectDishsIds(getState()) || [];

  if (
    restaurantDishIds?.every((restaurantDishId) =>
      loadedDishIds.includes(restaurantDishId)
    )
  ) {
    return;
  }

  dispatch(dishSlice.actions.startLoading());

  fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
    .then((response) => response.json())
    .then((dishes) => {
      console.log(dishes);
      dispatch(dishSlice.actions.successLoading(normolize(dishes)));
    })
    .catch(() => {
      console.log("error");
      dispatch(dishSlice.actions.failLoading());
    });
};
