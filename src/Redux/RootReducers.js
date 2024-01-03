import { combineReducers } from "redux";
import cartReducer from "./Reducers/CartReducer";

const rootReducers = combineReducers({
  cart: cartReducer,
});
export default rootReducers;
