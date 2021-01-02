import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getProductById } from '../../../redux/actions';

const ProductDetails = (props) => {
  const [numProduct, setNumProduct] = useState(1);
  const product = useSelector((state) => state.product);
  const { productDetails } = product;
  const { productId } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  console.log(productDetails);

  const handleButton = () => {
    dispatch(addToCart(productDetails, numProduct));
  };

  return (
    <>
      <Row className="mt-4">
        <Col xs={5}>
          {productDetails.priceSale && productDetails.priceSale > 0 ? (
            <div className="onsale">Sale!</div>
          ) : (
            ''
          )}
          <img
            src={productDetails.productPictures}
            alt="product"
            className="w-100"
          />
        </Col>
        <Col xs={7}>
          <h1>{productDetails.name}</h1>
          {productDetails.priceSale && productDetails.priceSale > 0 ? (
            <h3 className="price">
              <del>{productDetails.price}$</del> - {productDetails.priceSale}$
            </h3>
          ) : (
            <h3 className="price">{productDetails.price}$</h3>
          )}
          <p>{productDetails.description}</p>
          <div className="action-addtocart d-flex">
            <div className="input-group input-group-lg w-25">
              <input
                type="Number"
                value={numProduct}
                min={1}
                className="form-control mr-3"
                onChange={(e) => setNumProduct(e.target.value)}
              />
            </div>
            <Button size="lg" className="w-75" onClick={() => handleButton()}>
              Add to Cart
            </Button>
          </div>
          <p>{productDetails.category && productDetails.category.name}</p>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;
