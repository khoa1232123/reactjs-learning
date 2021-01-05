import axios from '../../helpers/axios';
import { getCartItems, setCartItems } from '../../helps/localStorage';
import { cartTypes } from '../types';

export const getCartProduct = () => {
  return async (dispatch) => {
    console.log('abc get cart items');
    try {
      dispatch({ type: cartTypes.GET_CART_PRODUCT_REQUEST });
      const res = await axios.get('/cart/user/getCartItems');
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartTypes.GET_CART_PRODUCT_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, quantity = 1) => {
  return async (dispatch) => {
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
    const res = await axios.post(`/cart/addtocart`, { cartItems });
    console.log(res);
    dispatch({ type: cartTypes.ADD_TO_CART_REQUEST });
    setCartItems(cartItems);
    dispatch(getCartProduct());
    dispatch({
      type: cartTypes.ADD_TO_CART_SUCCESS,
    });
  };
};

export const removeCart = (productId) => {
  return (dispatch) => {
    dispatch({ type: cartTypes.REMOVE_CART_REQUEST });
    const cartItems = getCartItems();
    console.log(cartItems);
    const removedCart = cartItems.filter(
      (item) => item.product._id !== productId
    );
    setCartItems(removedCart);
    dispatch(getCartProduct());
    dispatch({
      type: cartTypes.REMOVE_CART_SUCCESS,
    });
  };
};
