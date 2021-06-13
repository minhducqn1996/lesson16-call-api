import * as Types from './../constants/ActionType';

const initialState = {};

const product = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_PRODUCT:
            console.log(action);
            // state = action.products;
            return action.product
        
        default: return state;
    }
};

export default product;