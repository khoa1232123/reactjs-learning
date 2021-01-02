import { getCartItems, setCartItems } from '../../helps/localStorage';
import { cartTypes } from '../types';

export const getCartProduct = () => {
  return (dispatch) => {
    dispatch({ type: cartTypes.GET_CART_PRODUCT_REQUEST });
    const cartItems = getCartItems();
    let totalQty = 0;
    cartItems.forEach((item) => {
      totalQty += item.quantity;
    });
    dispatch({
      type: cartTypes.GET_CART_PRODUCT_SUCCESS,
      payload: { cartItems, totalQty },
    });
  };
};

export const addToCart = (product, quantity = 1) => {
  return (dispatch) => {
    const cartItems = getCartItems();
    const exits = cartItems.findIndex(
      (item) => item.product._id === product._id
    );
    console.log(exits);
    if (exits < 0) {
      cartItems.push({ product, quantity: Number(quantity) });
    } else {
      cartItems[exits].quantity = cartItems[exits].quantity + Number(quantity);
    }
    let totalQty = 0;
    cartItems.forEach((item) => {
      // eslint-disable-next-line no-unused-vars
      totalQty += item.quantity;
    });
    dispatch({ type: cartTypes.ADD_TO_CART_REQUEST });
    console.log(cartItems);
    setCartItems(cartItems);
    dispatch({
      type: cartTypes.ADD_TO_CART_SUCCESS,
      payload: { cartItems, totalQty },
    });
  };
};
