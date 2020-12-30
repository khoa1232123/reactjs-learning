import { toolProduct } from '../types';

const initialState = {
  skip: 0,
  limit: 12,
  category: '',
  sortField: 'createdAt',
  search: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case toolProduct.PRODUCT_PAGINATION_SKIP:
      return { ...state, skip: payload };
    case toolProduct.PRODUCT_PAGINATION_LIMIT:
      return { ...state, limit: payload };
    case toolProduct.PRODUCT_CATEGORY:
      return { ...state, category: payload, skip: 0, search: '' };
    case toolProduct.PRODUCT_SORT_FIELD:
      return { ...state, sortField: payload };
    case toolProduct.PRODUCT_SEARCH:
      return { ...state, search: payload, category: '', skip: 0 };
    case toolProduct.PRODUCT_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
