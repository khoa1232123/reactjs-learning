import React from 'react';
import { Col, Row } from 'react-bootstrap';

import data from '../../data';
import { ProductItem } from '../../components';

const Shop = () => {
  const { products } = data;
  return (
    <>
      <Row>
        <h2>Shop</h2>
      </Row>
      <Row>
        <Col xs={3}>Sidebar</Col>
        <Col xs={9}>
          <Row>
            {products.map((product) => (
              <Col xs={3} key={product._id}>
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
