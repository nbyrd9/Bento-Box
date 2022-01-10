import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProductForm = (props) => {
    const [product, setProduct] = useState({
        productname: props.product ? props.product.productname : '',
        price: props.product ? props.product.price : '',
        description: props.product ? props.product.description
    })

    const [errorMsg, setErrorMsg] = useState('');
    const {productname, price, description} = product

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [productname, price, description]
        let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !== '0';
        });
    
    if (allFieldsFilled) { 
        const product = {
            id: uuidv4(),
            productname,
            price,
            description
        }
        props.handleOnSubmit(product)
    } else {
        errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
};

const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
        case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setProduct((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setProduct(prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="productname"
            value={productname}
            placeholder="Enter name of product"
            onChange={handleInputChange}
          />
          </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="price"
            value={price}
            placeholder="Enter Price"
            onChange={handleInputChange}
          />
        </Form.Group>    
        <Form.Group controlId="description">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;