import React from "react";
import {createSlice} from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state, action)=>{
            console.log(action.payload);
            state.push(action.payload);
        },
        removeItem:(state, action)=>{
            console.log(action.payload);
            return state.filter(product=> product.id!==action.payload);
        },
    }
});

export const{addItem, removeItem}=CartSlice.actions;
export default CartSlice.reducer;