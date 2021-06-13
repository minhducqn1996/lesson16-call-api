import * as Types from './../constants/ActionType';

const initialState = []

const findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETH_PRODUCTS:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        default: return [...state];
    }
};

export default products;