import ActionTypes from "../constants/action-types";

const initialState = {
    numberFev: 0,
    fevs: []
}

export const fevReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_FAVOURIT:
            if(state.numberFev === 0){
                let item = {
                    ...payload,
                    quantity: 1
                };
                state.fevs.push(item);
            }else{
                let check = false;
                state.fevs.map((item, index) => {
                    if(item.id === payload.id){
                        state.fevs[index].quantiy++;
                        check = true;
                    }
                });
                if(!check){
                    let _item = {
                        ...payload,
                        quantity:1
                    }
                    state.fevs.push(_item);
                }
            }
            return {
                ...state,
                numberFev: state.numberFev + 1
            };
        default:
            return state;
    }
}