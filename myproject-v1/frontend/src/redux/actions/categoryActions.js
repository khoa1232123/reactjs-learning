import axios from '../../helpers/axios';
import { categoryTypes } from '../types';

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryTypes.GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get('/category/getcategories');
    if (res.status === 200) {
      dispatch({
        type: categoryTypes.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          categories: res.data.categoryList,
        },
      });
    } else {
      dispatch({
        type: categoryTypes.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const createCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: categoryTypes.ADD_NEW_CATEGORY_REQUEST });
    const res = await axios.post('/category/create', category);
    console.log(res);
    if (res.status === 201) {
      dispatch({ type: categoryTypes.ADD_NEW_CATEGORY_SUCCESS });
      dispatch(getAllCategory());
    } else {
      dispatch({
        type: categoryTypes.ADD_NEW_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const updateCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: categoryTypes.UPDATE_CATEGORY_REQUEST });
    const res = await axios.post('/category/update', category);
    console.log(res);
    if (res.status === 201) {
      dispatch({ type: categoryTypes.UPDATE_CATEGORY_SUCCESS });
      dispatch(getAllCategory());
    } else {
      dispatch({
        type: categoryTypes.UPDATE_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    dispatch({ type: categoryTypes.DELETE_CATEGORY_REQUEST });
    const res = await axios.post('/category/delete', { id });
    if (res.status === 201) {
      dispatch({ type: categoryTypes.DELETE_CATEGORY_SUCCESS });
      dispatch(getAllCategory());
    } else {
      dispatch({
        type: categoryTypes.DELETE_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
