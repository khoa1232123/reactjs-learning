import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleBtn = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="mb-3">
      {product.priceSale && product.priceSale > 0 ? (
        <div className="onsale">Sale!</div>
      ) : (
        ''
      )}
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.productPictures} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </Card.Title>
        {product.priceSale ? (
          <Card.Text className="price">
            <del>{product.price}$</del> - {product.priceSale}$
          </Card.Text>
        ) : (
          <Card.Text className="price">{product.price}$</Card.Text>
        )}
        <Card.Text>{product.rating}</Card.Text>
        <Button variant="primary" size="sm" onClick={() => handleBtn()}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
