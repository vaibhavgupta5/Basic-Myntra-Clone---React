import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    // false: 'PENDING' and true: 'DONE'
    fetching: false,
    currentlyFetching: false,
  },

  reducers: {
    markFetchDone: (state) => {
      state.fetching = true;
    },

    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },

    markFetchingDone: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
