import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

const cartReducer = (accumulator, cartItem) => accumulator + cartItem.quantity;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(cartReducer, 0)
);

const totalPriceReducer = (acc, cartItem) =>
  acc + cartItem.quantity * cartItem.price;

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(totalPriceReducer, 0)
);
