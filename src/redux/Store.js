import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import cartSlice from "./Slices/cartSlice";

export const store=configureStore({
    reducer:
    {
        cart:cartSlice
    }

})