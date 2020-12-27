import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { ProductItem } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../redux/actions';
import Sidebar from './Sidebar';

const Shop = () => {
  const product = useSelector((state) => state.product);
  const [numRow, setNumRow] = useState(3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <Row>
        <Col>
          <h2>Shop</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Button variant="primary" onClick={() => setNumRow(4)}>
            3
          </Button>{' '}
          <Button variant="primary" onClick={() => setNumRow(3)}>
            4
          </Button>
          <Row>
            {product.products &&
              product.products.map((product) => (
                <Col xs={numRow} key={product._id}>
                  <ProductItem product={product} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Shop;
