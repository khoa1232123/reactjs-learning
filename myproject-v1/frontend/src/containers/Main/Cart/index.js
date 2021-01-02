import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems } = cart;
  return (
    <Row>
      <Col xs={12}>
        <h1>Cart</h1>
      </Col>
      <Col xs={9}>
        <Table striped bordered hover className="tableCart">
          <thead>
            <tr>
              <th>STT</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item, index) => {
                const {
                  product: { productPictures, name, price },
                  product,
                  quantity,
                } = item;
                return (
                  <tr key={index}>
                    <td>1</td>
                    <td>
                      <img
                        src={productPictures}
                        alt={name}
                        className="imgCart"
                      />
                    </td>
                    <td>{name}</td>
                    <td>${price}</td>
                    <td>
                      <Button onClick={() => dispatch(addToCart(product, -1))}>
                        -
                      </Button>
                      <input type="number" value={quantity} />
                      <Button onClick={() => dispatch(addToCart(product, 1))}>
                        +
                      </Button>
                    </td>
                    <td>@mdo</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Col>
      <Col xs={3}></Col>
    </Row>
  );
};

export default Cart;
