import { REMOVE_FROM_CART } from "./ActionTypes";
import { ADD_TO_CART, UPDATE_QUANTITY } from "./ActionTypes";

export const addItem = (product) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity: 1 },
  };
};

export const updateQuantity = (id, newQuantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, newQuantity },
  };
};

export const removeItem = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};
