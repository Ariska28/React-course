export const selectCartModule = (state) => state.cart;

export const selectCartDishIds = (state) =>
  Object.keys(selectCartModule(state));

export const selectCartDishCount = (state, { dishId }) =>
  selectCartModule(state)?.[dishId] || 0;
