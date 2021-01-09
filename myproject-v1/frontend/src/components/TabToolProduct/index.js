import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSortFieldProduct } from '../../redux/actions';

const TabToolProduct = ({ numRow, setNumRow }) => {
  const toolProduct = useSelector((state) => state.toolProduct);
  const dispatch = useDispatch();

  const [sort, setSort] = useState('');

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    dispatch(setSortFieldProduct(e.target.value));
  };

  return (
    <Row className="mb-3">
      <Col xs={6}>
        <Button
          variant="outline-primary"
          className={numRow === 4 ? 'active' : ''}
          onClick={() => setNumRow(4)}
        >
          3
        </Button>{' '}
        <Button
          variant="outline-primary"
          className={numRow === 3 ? 'active' : ''}
          onClick={() => setNumRow(3)}
        >
          4
        </Button>
      </Col>
      <Col xs={3}>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom" className="mb-0">
            <Form.Control
              as="select"
              value={sort}
              onChange={(e) => handleChangeSort(e)}
            >
              <option value="">--Select Sort--</option>
              <option value="price">Price (down - up)</option>
              <option value="-price">Price (up - down)</option>
              <option value="createdAt">Date</option>
              <option value="name">Name</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col xs={3}></Col>
    </Row>
  );
};

export default TabToolProduct;
