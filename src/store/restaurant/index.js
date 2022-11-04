import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
  entities: {},
  ids: [],
  status: LoadingStatuses.idle,
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = LoadingStatuses.inProgress;
    },
    successLoading: (state, action) => {
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.status = LoadingStatuses.success;
    },
    failLoading: (state) => {
      state.entities = {};
      state.ids = [];
      state.status = LoadingStatuses.failed;
    },
  },
});
