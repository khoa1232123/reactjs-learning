import { cartTypes } from '../types';

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
  totalQty: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.GET_CART_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cartTypes.GET_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        cartItems: payload.cartItems,
        totalQty: payload.totalQty,
        loading: false,
      };
    case cartTypes.GET_CART_PRODUCT_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    case cartTypes.ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cartTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: payload.cartItems,
        totalQty: payload.totalQty,
        loading: false,
      };
    case cartTypes.ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    case cartTypes.RESET_CART:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
