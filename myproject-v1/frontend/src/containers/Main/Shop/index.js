import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ProductItem, ThePagination } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultProduct } from '../../../redux/actions';
import Sidebar from './Sidebar';
import TabToolProduct from '../../../components/TabToolProduct';

const Shop = () => {
  const product = useSelector((state) => state.product);
  const toolProduct = useSelector((state) => state.toolProduct);
  // const { sortField } = toolProduct;
  console.log(toolProduct);
  const [numRow, setNumRow] = useState(3);
  const limit = 12;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultProduct());
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
          <TabToolProduct numRow={numRow} setNumRow={setNumRow} />
          <Row>
            {product.products
              ? product.products.map((product) => (
                  <Col xs={numRow} key={product._id}>
                    <ProductItem product={product} />
                  </Col>
                ))
              : 'No Product'}
            <ThePagination count={product.countAllProduct} limit={limit} />
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Shop;
