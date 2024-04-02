import { configureStore } from "@reduxjs/toolkit";
import MockSlice from "./MockApi/MockSlice";



const Store = configureStore({
    reducer:{
        MockSlice

    }
})

export default Store