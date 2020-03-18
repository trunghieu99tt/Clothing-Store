import cartActionTypes from "./cart.types";

export const addItem = item => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item
});
export const decreaseItem = item => ({
	type: cartActionTypes.DECREASE_ITEM,
	payload: item
});
export const clearItemFromCart = item => ({
	type: cartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});
export const addItemToWishlist = item => ({
	type: cartActionTypes.ADD_ITEM_TO_WISHLIST,
	payload: item
});
