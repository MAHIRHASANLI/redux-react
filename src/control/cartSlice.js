import { createSlice } from "@reduxjs/toolkit"
import courseItems from "../data/CourseItem"

const initialState = {
    cartItems: courseItems,
    quantity: courseItems.length,
    total: 0
}

const cartsSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeCartItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increace: (state, action) => {
            const itemId = action.payload;
            const findItem = state.cartItems.find((item) => item.id === itemId)
            findItem.quantity += 1
        },
        decreace: (state, action) => {
            const itemId = action.payload;
            const findItem = state.cartItems.find((item) => item.id === itemId)
            findItem.quantity -= 1
        },
        calculateTotal: (state) => {
            let total = 0;
            let quantity = 0;
            state.cartItems.forEach((item) => {
                total += item.price * item.quantity;
                quantity += item.quantity;
            });
            state.quantity = quantity;
            state.total = total;
        },
    }
})

export const { clearCart, removeCartItem, increace, decreace,calculateTotal } = cartsSlice.actions

export default cartsSlice.reducer