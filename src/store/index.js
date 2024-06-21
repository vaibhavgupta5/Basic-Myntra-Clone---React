import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


// main Store that contains data of all slices and passed to all components

const myntraStore = configureStore({
    reducer:{
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default myntraStore;