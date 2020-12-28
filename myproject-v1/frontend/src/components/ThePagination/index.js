import React, { useEffect, useState } from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../../redux/actions';

const ThePagination = ({ count, limit }) => {
  const [skip, setSkip] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct(limit, skip * limit));
  }, [dispatch, limit, skip]);

  let items = [];
  const b = Math.ceil(Number(count) / Number(limit));
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
      <Pagination>{items}</Pagination>
    </Col>
  );
};

export default ThePagination;
