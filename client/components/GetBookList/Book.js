import React from 'react';

import { Col, Panel } from 'react-bootstrap';

function Book(props) {
    let { book } = props;

    return (
        <Col lg={3} md={4} sm={6}>
            <Panel className="product">
                <div className="product-img-wrapper">
                    <a href="#">
                        <img
                            alt={book.name}
                            className="img-responsive product-img"
                            src={book.picture} />
                    </a>
                </div>

                <h4 className="ellipsis" title={product.name}>
                    <a href="#">
                        {book.name}
                    </a>
                </h4>

                <h5 className="ellipsis product-brand-name" title={product.category}>
                    {`by ${book.category}`}
                </h5>

                <div className="pull-right h4 product-price">
                    {`${book.price}$`}
                </div>
            </Panel>
        </Col>
    );
}

Product.propTypes = {
    product: React.PropTypes.object.isRequired
};

export default Product;
