import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Product = ({
    id,
    productname,
    price,
    description,
    handleDeleteProduct
}) => {
    const history = useHistory();
    return (
        <Card style={{ width: '18rem' }} className="product">
          <Card.Body>
            <Card.Title className="product-name">{productname}</Card.Title>
            <div className="product-details">
              <div>Price: ${price} </div>
              <div>Description: {description} </div>
              
            </div>
            <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                Edit
            </Button>{' '}
            <Button variant="danger" onClick={() => handleDeleteProduct(id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      );
}

export default Product;