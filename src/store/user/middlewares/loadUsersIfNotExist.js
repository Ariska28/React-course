import { normolize } from "../../utils/normolize";
import { selectUserIds } from "../selectors";
import { userSlice } from "../index";

export const loadUsersIfNotExist = (dispatch, getState) => {
  if (selectUserIds(getState())?.length > 0) {
    return;
  }

  dispatch(userSlice.actions.startLoading());

  fetch("http://localhost:3001/api/users/")
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
      dispatch(userSlice.actions.successLoading(normolize(users)));
    })
    .catch(() => {
      console.log("error");
      dispatch(userSlice.actions.failLoading());
    });
};
