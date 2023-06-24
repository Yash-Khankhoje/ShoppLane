import { createStore } from "redux";
import { cartReducer } from "./reducers/cart-reducer";
import { fevReducer } from "./reducers/fev-reducer";
import commonReducer from "./reducers/combinedReducers";

const store = createStore(commonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;