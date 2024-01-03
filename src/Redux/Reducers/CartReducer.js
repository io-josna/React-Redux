import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
} from "../Actions/ActionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, newItem];
      }
    }
    case UPDATE_QUANTITY: {
      const { id, newQuantity } = action.payload;
      const updatedCart = state.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      return updatedCart;
    }

    case REMOVE_FROM_CART: {
      const itemToRemove = action.payload.id;
      return state.filter((item) => item.id !== itemToRemove);
    }
    default:
      return state;
  }
};
export default cartReducer;
