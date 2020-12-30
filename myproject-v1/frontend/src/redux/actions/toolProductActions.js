import { toolProduct } from '../types';
import { getAllProduct } from './productActions';

export const setLimitProduct = (limit) => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_PAGINATION_LIMIT, payload: limit });
    dispatch(getAllProduct());
  };
};

export const setSkipProduct = (skip) => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_PAGINATION_SKIP, payload: skip });
    dispatch(getAllProduct());
  };
};

export const setCategoryProduct = (cat) => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_CATEGORY, payload: cat });
    dispatch(getAllProduct());
  };
};

export const setSortFieldProduct = (sortField) => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_SORT_FIELD, payload: sortField });
    dispatch(getAllProduct());
  };
};

export const setSearchProduct = (search) => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_SEARCH, payload: search });
    dispatch(getAllProduct());
  };
};

export const setDefaultProduct = () => {
  return (dispatch) => {
    dispatch({ type: toolProduct.PRODUCT_CLEAR });
    dispatch(getAllProduct());
  };
};
