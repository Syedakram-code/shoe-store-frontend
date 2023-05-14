import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

export const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        WishlistItems: [],
    },
    reducers: {
        addToWishlist: (state, action) => {
            const item = state.WishlistItems.find(
                (p) => p.id === action.payload.id
            );
            if (item) {
                toast.warn("Item Already Exist on your Wishlist!", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                state.WishlistItems.push({ ...action.payload, quantity: 1 });
                toast.success("Item Added to your Wishlist!", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        },
        updateWishlist: (state, action) => {
            state.WishlistItems = state.WishlistItems.map((p) => {
                if (p.id === action.payload.id) {
                    if (action.payload.key === "quantity") {
                        p.attributes.price =
                            p.oneQuantityPrice * action.payload.val;
                    }
                    return { ...p, [action.payload.key]: action.payload.val };
                }
                return p;
            });
        },
        removeFromWishlist: (state, action) => {
            state.WishlistItems = state.WishlistItems.filter(
                (p) => p.id !== action.payload.id
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, updateWishlist, removeFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
