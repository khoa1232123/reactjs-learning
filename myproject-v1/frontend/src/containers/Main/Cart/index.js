import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../../../redux/actions';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalQty } = cart;

  const handleRemoveCart = (product) => {
    dispatch(removeCart(product._id));
  };
  return (
    <Row>
      <Col xs={12}>
        <h1>Cart</h1>
      </Col>
      <Col xs={9}>
        <Table bordered className="tableCart">
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
                    <td>${price * quantity}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={() => dispatch(addToCart(product, -1))}
                          className="mr-2"
                        >
                          -
                        </Button>
                        <input
                          type="number"
                          disabled
                          min={1}
                          max={product.quantity}
                          value={quantity}
                          onChange={() => {}}
                          className="form-control w-25"
                        />
                        <Button
                          onClick={() => dispatch(addToCart(product, 1))}
                          className="ml-2"
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveCart(product)}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Col>
      <Col xs={3}>
        <Table bordered>
          <tbody>
            <tr>
              <th>Subtotal:</th>
              <th>${totalPrice}</th>
            </tr>
            <tr>
              <th>Shipping:</th>
              <th>${totalQty > 5 ? 0 : 15}</th>
            </tr>
            {totalQty <= 5 && (
              <tr>
                <td colSpan={2}>Buy more than 5 products to ship</td>
              </tr>
            )}
            <tr>
              <th>Total:</th>
              <th>${totalQty > 5 ? totalPrice : totalPrice + 15}</th>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary" className="w-100">
          Process
        </Button>
      </Col>
    </Row>
  );
};

export default Cart;
