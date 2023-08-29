import { configureStore } from "@reduxjs/toolkit"
import cartsSlice from "./control/cartSlice"

export const store = configureStore({
    reducer: {
        cart: cartsSlice
    }
})