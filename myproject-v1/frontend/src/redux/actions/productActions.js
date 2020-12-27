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
      dispatch({
        type: productTypes.GET_ALL_PRODUCT_FAILURE,
        payload: res.data.error,
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
      dispatch({
        type: productTypes.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: res.data.error,
      });
    }
  };
};

export const createProduct = (product) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    dispatch({ type: productTypes.CREATE_PRODUCT_REQUEST });
    console.log({ product, auth });
    const res = await axios.post('/product/create', product, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    if (res.status === 201) {
      const message = 'Add product success';
      dispatch({ type: productTypes.CREATE_PRODUCT_SUCCESS, payload: message });
      dispatch(getAllProduct());
    } else {
      dispatch({
        type: productTypes.CREATE_PRODUCT_FAILURE,
        payload: res.data.error,
      });
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    dispatch({ type: productTypes.UPDATE_PRODUCT_REQUEST });
    const res = await axios.post('/product/update', product, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    console.log(res);
    if (res.status === 201) {
      const message = 'Update product success';
      dispatch({ type: productTypes.UPDATE_PRODUCT_SUCCESS, payload: message });
      dispatch(getAllProduct());
    } else {
      dispatch({
        type: productTypes.UPDATE_PRODUCT_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
