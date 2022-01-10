import React from "react";
import ProductForm from './ProductForm'

const AddProduct = () => {
    const handleOnSubmit = (prodcut) => {
        console.log(product)
    }

    return (
        <React.Fragment>
            <ProductForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddProduct;