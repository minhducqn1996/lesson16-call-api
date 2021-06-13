import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const { product, index, handleDelete } = props;
    const showStatus = product.status === true ? 'Còn hàng' : 'hết hàng';
    const statusClass = product.status === true ? 'warning' : 'default';

    const onDelete = (id) => {
        return () => {
            if (confirm('Bạn có chắc xóa ?')) { //eslint-disable-line
                handleDelete(id);
            }
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={`label label-${statusClass}`}>
                    {showStatus}
                </span>
            </td>
            <td>
                <Link
                    to={`product/${product.id}/edit`}
                    type="button"
                    className="btn btn-success mr-10"
                >
                    Sửa
                </Link>
                <button
                    onClick={onDelete(product.id)}
                    type="button"
                    className="btn btn-danger"
                >
                    Xóa
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;