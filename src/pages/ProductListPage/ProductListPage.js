import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actFethProductsRequest, actDeleteProductRequest } from './../../actions/index';

const ProductListPage = (props) => {
    const { fethAllProducts, products, onDeleteRequest } = props;

    useEffect(() => {
        // other code
        fethAllProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onDelete = (id) => {
        console.log(id);
        onDeleteRequest(id)
    }

    const showProduct = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        handleDelete={onDelete}
                    />
                )
            })
        }
        return result;
    }

    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-info mb-10">Thêm sản phẩm</Link>
                <ProductList>
                    {showProduct(products)}
                </ProductList>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fethAllProducts: () => {
            dispatch(actFethProductsRequest())
        },
        onDeleteRequest: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);