import ActionTypes from "../constants/action-types";

export const addToFev = (product) => {
    return {
        type: ActionTypes.ADD_TO_FAVOURIT,
        payload: product
    }
}