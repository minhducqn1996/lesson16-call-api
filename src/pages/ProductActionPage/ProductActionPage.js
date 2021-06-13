import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actOnSaveProductFromStateRequest, actUpdateProductRequest, actOnSaveProductFromState } from '../../actions';
import product from '../../reducers/product';

const ProductActionPage = (props) => {
    const { history, match, onAddProduct, onSaveProduct, product, onUpdateProduct, onSaveProductFromState} = props;

    console.log('product', product);

    const [state, setstate] = useState({
        id: "",
        txtName: "",
        txtPrice: "",
        chkbStatus: '',
    })

    useEffect(() => {
        // other code
        const SwitchCallAPI = (match) => {
            if (match) {
                console.log('co match');
                let id = match.params.id;
                onSaveProduct(id)
            } else {
                let product = {}
                console.log('khong co match');
                onSaveProductFromState(product)
            }
        }
        SwitchCallAPI(match)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (product) {
            console.log('product', product);
            setstate((preState) => ({
                ...preState,
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                chkbStatus: product.status
            }))
        }
    }, [product])

    const onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = name === 'chkbStatus' ? target.checked : target.value;
        setstate((preState) => ({
            ...preState,
            [name]: value
        }))
    }

    const onSave = (e) => {
        e.preventDefault();
        let { id, txtName, txtPrice, chkbStatus } = state;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };
        if (id) {
            onUpdateProduct(product);
            history.goBack();
        } else {
            onAddProduct(product);
            history.goBack()
        }
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={onSave}>
                <div className="form-group">
                    <label>Tên sản phẩm: </label>
                    <input
                        onChange={onChange}
                        value={state.txtName || ""}
                        name="txtName"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Giá:</label>
                    <input
                        onChange={onChange}
                        value={state.txtPrice || ""}
                        name="txtPrice"
                        type="number"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Status:</label>
                </div>
                <div className="checkbox">
                    <label>
                        <input
                            onChange={onChange}
                            value={state.chkbStatus || ""}
                            type="checkbox"
                            name="chkbStatus"
                            checked={state.chkbStatus || ""}
                        />
                        Còn hàng
                    </label>
                </div>
                <Link to='/product-list' className='btn btn-danger mr-10'>
                    Trở về
                </Link>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onSaveProduct: id => {
            dispatch(actOnSaveProductFromStateRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        },
        onSaveProductFromState: product => {
            dispatch(actOnSaveProductFromState(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);