import React from "react";
import _ from 'lodash';
import Product from './Product';

const ProductsList = ({products, setProducts}) => {
    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }
    return (
        <React.Fragment>
          <div className="product-list">
            {!_.isEmpty(products) ? (
              products.map((product) => (
                <Product key={product.id} {...product} handleDeleteProduct={handleDeleteProduct} />
              ))
            ) : (
              <p className="message">No products available. Please add some.</p>
            )}
          </div>
        </React.Fragment>
      );
    
}

export default ProductsList;