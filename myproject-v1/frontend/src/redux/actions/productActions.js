import data from '../../data';
import axios from '../../helpers/axios';
import { productTypes } from '../types';

export const getAllProduct = () => {
  return async (dispatch) => {
    dispatch({ type: productTypes.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get('/product/getproducts');
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: productTypes.GET_ALL_PRODUCT_SUCCESS,
        payload: res.data.products,
      });
    } else {
      const error = 'Error';
      dispatch({
        type: productTypes.GET_ALL_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };
};

export const getProductById = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: productTypes.GET_PRODUCT_DETAILS_BY_ID_REQUEST,
    });
    const res = await axios.get(`/product/getproduct/${productId}`);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: productTypes.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: res.data.product,
      });
    } else {
      const error = 'Error';
      dispatch({
        type: productTypes.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: error,
      });
    }
  };
};
