import { productTypes } from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDetails: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productDetails: payload,
      };
    case productTypes.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return {
        ...state,
      };
  }
};