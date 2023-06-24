import ActionTypes from "../constants/action-types";

const initialState = {
    numberCart: 0,
    carts: []
}

export const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            if(state.numberCart===0){
                let item = {
                    ...payload,
                    quantity: 1
                };
                state.carts.push(item);
            }else{
                let check = false;
                state.carts.map((item, index) => {
                    if(item.id === payload.id){
                        state.carts[index].quantiy++;
                        check = true;
                    }
                });
                if(!check){
                    let _item = {
                        ...payload,
                        quantity:1
                    }
                    state.carts.push(_item);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            };
        default:
            return state;
    }
}