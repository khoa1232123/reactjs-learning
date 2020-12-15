import data from '../../data';
import { productTypes } from '../types';

export const getProductById = (productId) => {
  return (dispatch) => {
    const { products } = data;
    const product = products.find((x) => x._id === productId);
    if (product) {
      dispatch({
        type: productTypes.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: product,
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
