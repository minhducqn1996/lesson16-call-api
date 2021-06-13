import * as Types from './../constants/ActionType';
import callAPI from './../utils/ApiCaller';
import product from '../reducers/product';

export const actFethProductsRequest = () => {
    return dispatch => {
        return callAPI('products', 'GET', null).then(res => {
            dispatch(actFethProducts(res.data))
        })
    }
}

export const actFethProducts = (products) => {
    return {
        type: Types.FETH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callAPI(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callAPI('products', 'POST', product).then(res => {
            dispatch(actAddProduct(product))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actOnSaveProductFromStateRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'GET', null).then(res => {
            console.log(res.data);
            dispatch(actOnSaveProductFromState(res.data))
        })
    }
}

export const actOnSaveProductFromState = (product) => {
    return {
        type: Types.SAVE_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callAPI(`products/${product.id}`, 'PUT', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            console.log(res);
        })
    }
}

export const actUpdateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}