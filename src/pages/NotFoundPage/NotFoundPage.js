import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Không thể truy cập</strong>
            </div>
        </div>
    );
};

export default NotFoundPage;