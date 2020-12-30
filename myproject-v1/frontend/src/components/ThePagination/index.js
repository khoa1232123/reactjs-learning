import React from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSkipProduct } from '../../redux/actions';

const ThePagination = () => {
  const toolProduct = useSelector((state) => state.toolProduct);
  const { limit, skip } = toolProduct;
  const product = useSelector((state) => state.product);
  const { countAllProduct } = product;
  const dispatch = useDispatch();

  const setSkip = (num) => {
    dispatch(setSkipProduct(num));
  };

  let items = [];
  const b = Math.ceil(Number(countAllProduct) / Number(limit));
  for (let number = 0; number < b; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === skip}
        onClick={() => setSkip(number)}
      >
        {number + 1}
      </Pagination.Item>
    );
  }

  console.log(skip);

  return (
    <Col xs={12}>
      <Pagination className="justify-content-center">{items}</Pagination>
    </Col>
  );
};

export default ThePagination;
