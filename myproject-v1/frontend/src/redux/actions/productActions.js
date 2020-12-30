import axios from '../../helpers/axios';
import { productTypes } from '../types';

export const getAllProduct = () => {
  return async (dispatch, getState) => {
    const {
      toolProduct: { limit, skip, sortField, category, search },
    } = getState();
    let url = `/product/getproducts?limit=${limit}&skip=${skip}&sortField=${sortField}`;
    if (search) {
      url = `${url}&search=${search}`;
    }
    if (category) {
      // eslint-disable-next-line no-unused-vars
      url = `${url}&category=${category}`;
    }
    dispatch({ type: productTypes.GET_ALL_PRODUCT_REQUEST });
    const res = await axios.get(url);
    console.log(res);
    if (res.status === 200) {
      const { products, countAllProduct } = res.data;
      dispatch({
        type: productTypes.GET_ALL_PRODUCT_SUCCESS,
        payload: { products, countAllProduct },
      });
    } else {
      dispatch({
        type: productTypes.GET_ALL_PRODUCT_FAILURE,
        payload: res.data.error,
      });
    }
  };
};

export const getProductByCat = (catId) => {
  return async (dispatch) => {
    console.log(catId);
    dispatch({ type: productTypes.GET_PRODUCT_BY_CAT_REQUEST });
    const res = await axios.get(`/product/getproductbycat/${catId}`);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: productTypes.GET_PRODUCT_BY_CAT_SUCCESS,
        payload: res.data.products,
      });
    } else {
      dispatch({
        type: productTypes.GET_PRODUCT_BY_CAT_FAILURE,
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
