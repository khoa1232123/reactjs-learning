import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProduct } from '../../../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { totalQty } = cart;
  useEffect(() => {
    dispatch(getCartProduct());
  }, [dispatch]);
  return (
    <Link to="/cart" className="mini-cart">
      <i className="fas fa-shopping-cart"></i>
      <span>
        {totalQty > 99 ? (
          <>
            99<sup>+</sup>
          </>
        ) : (
          totalQty
        )}
      </span>
    </Link>
  );
};

export default Cart;
