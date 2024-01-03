import { createStore } from "redux";
import rootReducers from "./RootReducers";

const store = createStore(rootReducers);

export default store;
