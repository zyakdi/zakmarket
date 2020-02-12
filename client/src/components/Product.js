import React from 'react';

// SEE CARD COMPONENT IN REACT-BOOTSTRAP !!

const Product = ({product}) => (
    <div className="product">
        <p>{product.name}</p>
    </div>
)


export default Product;