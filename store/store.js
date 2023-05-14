import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import WishlistReducer from "./wishListSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: WishlistReducer,
    },
});

export default store;