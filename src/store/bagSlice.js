import { createSlice } from "@reduxjs/toolkit";


// Using Redux Toolkit - createSlice {Slice is bigger version of reducer that can contain many reducers}

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
    return store.filter((itemId => itemId !== action.payload))
      
    },
  },
});

export const bagAction = bagSlice.actions;

export default bagSlice;


