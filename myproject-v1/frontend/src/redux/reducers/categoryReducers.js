import { categoryTypes } from '../types';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case categoryTypes.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        loading: false,
      };
    case categoryTypes.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case categoryTypes.ADD_NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.ADD_NEW_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case categoryTypes.ADD_NEW_CATEGORY_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    case categoryTypes.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case categoryTypes.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return state;
  }
};
