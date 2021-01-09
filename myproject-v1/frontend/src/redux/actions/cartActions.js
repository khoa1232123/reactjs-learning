import axios from '../../helpers/axios';
import { getCartItems, setCartItems } from '../../helps/localStorage';
import { cartTypes } from '../types';

export const getCartProduct = () => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    try {
      dispatch({ type: cartTypes.GET_CART_PRODUCT_REQUEST });
      if (auth.authenticate) {
        const res = await axios.get('/cart/user/getCartItems');
        if (res.status === 200) {
          const { cartItems } = res.data;
          let totalQty = 0;
          let totalPrice = 0;
          cartItems.forEach((item) => {
            totalQty += item.quantity;
            totalPrice += item.product.price * item.quantity;
          });
          if (cartItems) {
            dispatch({
              type: cartTypes.GET_CART_PRODUCT_SUCCESS,
              payload: { cartItems, totalQty, totalPrice },
            });
          }
        }
      } else {
        const cartItems = getCartItems();
        let totalQty = 0;
        let totalPrice = 0;
        cartItems.forEach((item) => {
          totalQty += item.quantity;
          totalPrice += item.product.price * item.quantity;
        });
        if (cartItems) {
          dispatch({
            type: cartTypes.GET_CART_PRODUCT_SUCCESS,
            payload: { cartItems, totalQty, totalPrice },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, quantity = 1) => {
  return async (dispatch, getState) => {
    const {
      cart: { cartItems },
      auth,
    } = getState();
    let qty = 0;
    const exist = cartItems.findIndex(
      (item) => item.product._id === product._id
    );
    qty = cartItems[exist]
      ? Number(cartItems[exist].quantity) + Number(quantity)
      : Number(quantity);
    if (auth.authenticate) {
      dispatch({ type: cartTypes.ADD_TO_CART_REQUEST });
      const payload = {
        cartItems: [
          {
            product: product._id,
            quantity: qty,
          },
        ],
      };
      console.log(payload);
      const res = await axios.post('/cart/addtocart', payload);
      console.log(res);
    } else {
      let arrItems = cartItems ? cartItems : [];
      if (exist >= 0) {
        arrItems[exist].quantity += quantity;
      } else {
        arrItems.push({ product, quantity });
      }
      localStorage.setItem('cartItems', JSON.stringify(arrItems));
    }
    dispatch(getCartProduct());
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
