import SHOP_DATA from "./shop.data";
import { defaultMemoize } from "reselect";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;