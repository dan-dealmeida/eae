import { configureStore } from "@reduxjs/toolkit"
import uidSlice from "./uidSlice"

export const store = configureStore({
    reducer:{
        id: uidSlice
    }
})