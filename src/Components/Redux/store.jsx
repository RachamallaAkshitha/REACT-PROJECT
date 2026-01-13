import { configureStore } from "@reduxjs/toolkit";
import cartOperation from "./CartSlice"

export default configureStore(
    {
        reducer:{
            cart:cartOperation,
        }
    }
)