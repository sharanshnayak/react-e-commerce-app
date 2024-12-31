import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slice/slice";
export const store=configureStore({
    reducer:{
        cart: CartReducer
    }
}); 