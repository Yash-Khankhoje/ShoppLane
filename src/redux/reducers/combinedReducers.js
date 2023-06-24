import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer";
import { fevReducer } from "./fev-reducer";


const commonReducer = combineReducers({
    cartReducer,
    fevReducer
})

export default commonReducer;