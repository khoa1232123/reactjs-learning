import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Card className="mb-3">
      {product.priceSale && <div className="onsale">Sale!</div>}
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </Card.Title>
        {product.priceSale ? (
          <Card.Text className="price">
            <del>{product.price}</del> - {product.priceSale}
          </Card.Text>
        ) : (
          <Card.Text className="price">{product.price}</Card.Text>
        )}
        <Card.Text>{product.rating}</Card.Text>
        <Button variant="primary" size="sm">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
