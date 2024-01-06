import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/cartSlice";
// import cartRe

export const store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
});