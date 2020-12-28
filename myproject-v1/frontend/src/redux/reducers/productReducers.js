import { productTypes } from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false,
  productDetails: {},
  message: null,
  countAllProduct: 0,
  skip: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.GET_ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case productTypes.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: payload.products,
        countAllProduct: payload.countAllProduct,
      };
    case productTypes.GET_ALL_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case productTypes.GET_PRODUCT_BY_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case productTypes.GET_PRODUCT_BY_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: payload,
      };
    case productTypes.GET_PRODUCT_BY_CAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
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
    case productTypes.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case productTypes.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: payload,
      };
    case productTypes.CREATE_PRODUCT_FAILURE:
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
