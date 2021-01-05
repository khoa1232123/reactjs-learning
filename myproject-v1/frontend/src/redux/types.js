// User reducer types
export const categoryTypes = {
  GET_ALL_CATEGORIES_REQUEST: 'GET_ALL_CATEGORIES_REQUEST',
  GET_ALL_CATEGORIES_SUCCESS: 'GET_ALL_CATEGORIES_SUCCESS',
  GET_ALL_CATEGORIES_FAILURE: 'GET_ALL_CATEGORIES_FAILURE',
  ADD_NEW_CATEGORY_REQUEST: 'ADD_NEW_CATEGORY_REQUEST',
  ADD_NEW_CATEGORY_SUCCESS: 'ADD_NEW_CATEGORY_SUCCESS',
  ADD_NEW_CATEGORY_FAILURE: 'ADD_NEW_CATEGORY_FAILURE',

  UPDATE_CATEGORY_REQUEST: 'UPDATE_CATEGORY_REQUEST',
  UPDATE_CATEGORY_SUCCESS: 'UPDATE_CATEGORY_SUCCESS',
  UPDATE_CATEGORY_FAILURE: 'UPDATE_CATEGORY_FAILURE',

  DELETE_CATEGORY_REQUEST: 'DELETE_CATEGORY_REQUEST',
  DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_FAILURE: 'DELETE_CATEGORY_FAILURE',
};

export const productTypes = {
  GET_ALL_PRODUCT_REQUEST: 'GET_ALL_PRODUCT_REQUEST',
  GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
  GET_ALL_PRODUCT_FAILURE: 'GET_ALL_PRODUCT_FAILURE',

  GET_PRODUCT_BY_CAT_REQUEST: 'GET_PRODUCT_BY_CAT_REQUEST',
  GET_PRODUCT_BY_CAT_SUCCESS: 'GET_PRODUCT_BY_CAT_SUCCESS',
  GET_PRODUCT_BY_CAT_FAILURE: 'GET_PRODUCT_BY_CAT_FAILURE',

  GET_PRODUCT_PAGE_REQUEST: 'GET_PRODUCT_PAGE_REQUEST',
  GET_PRODUCT_PAGE_SUCCESS: 'GET_PRODUCT_PAGE_SUCCESS',
  GET_PRODUCT_PAGE_FAILURE: 'GET_PRODUCT_PAGE_FAILURE',

  GET_PRODUCT_DETAILS_BY_ID_REQUEST: 'GET_PRODUCT_DETAILS_BY_ID_REQUEST',
  GET_PRODUCT_DETAILS_BY_ID_SUCCESS: 'GET_PRODUCT_DETAILS_BY_ID_SUCCESS',
  GET_PRODUCT_DETAILS_BY_ID_FAILURE: 'GET_PRODUCT_DETAILS_BY_ID_FAILURE',

  CREATE_PRODUCT_REQUEST: 'CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_FAILURE: 'CREATE_PRODUCT_FAILURE',

  UPDATE_PRODUCT_REQUEST: 'UPDATE_PRODUCT_REQUEST',
  UPDATE_PRODUCT_SUCCESS: 'UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_FAILURE: 'UPDATE_PRODUCT_FAILURE',
};

export const toolProduct = {
  PRODUCT_PAGINATION_LIMIT: 'PRODUCT_PAGINATION_LIMIT',
  PRODUCT_PAGINATION_SKIP: 'PRODUCT_PAGINATION_SKIP',
  PRODUCT_CATEGORY: 'PRODUCT_CATEGORY',
  PRODUCT_SORT_FIELD: 'PRODUCT_SORT_FIELD',
  PRODUCT_SEARCH: 'PRODUCT_SEARCH',
  PRODUCT_CLEAR: 'PRODUCT_CLEAR',
};

export const authTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};

export const cartTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  ADD_TO_CART_REQUEST: 'ADD_TO_CART_REQUEST',
  ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILURE: 'ADD_TO_CART_FAILURE',
  GET_CART_PRODUCT_REQUEST: 'GET_CART_PRODUCT_REQUEST',
  GET_CART_PRODUCT_SUCCESS: 'GET_CART_PRODUCT_SUCCESS',
  GET_CART_PRODUCT_FAILURE: 'GET_CART_PRODUCT_FAILURE',
  REMOVE_CART_REQUEST: 'REMOVE_CART_REQUEST',
  REMOVE_CART_SUCCESS: 'REMOVE_CART_SUCCESS',
  REMOVE_CART_FAILURE: 'REMOVE_CART_FAILURE',
  RESET_CART: 'RESET_CART',
};

export const userTypes = {
  GET_USER_ADDRESS_REQUEST: 'GET_USER_ADDRESS_REQUEST',
  GET_USER_ADDRESS_SUCCESS: 'GET_USER_ADDRESS_SUCCESS',
  GET_USER_ADDRESS_FAILURE: 'GET_USER_ADDRESS_FAILURE',
  ADD_USER_ADDRESS_REQUEST: 'ADD_USER_ADDRESS_REQUEST',
  ADD_USER_ADDRESS_SUCCESS: 'ADD_USER_ADDRESS_SUCCESS',
  ADD_USER_ADDRESS_FAILURE: 'ADD_USER_ADDRESS_FAILURE',
  ADD_USER_ORDER_REQUEST: 'ADD_USER_ORDER_REQUEST',
  ADD_USER_ORDER_SUCCESS: 'ADD_USER_ORDER_SUCCESS',
  ADD_USER_ORDER_FAILURE: 'ADD_USER_ORDER_FAILURE',
  GET_USER_ORDER_REQUEST: 'GET_USER_ORDER_REQUEST',
  GET_USER_ORDER_SUCCESS: 'GET_USER_ORDER_SUCCESS',
  GET_USER_ORDER_FAILURE: 'GET_USER_ORDER_FAILURE',
  GET_USER_ORDER_DETAILS_REQUEST: 'GET_USER_ORDER_DETAILS_REQUEST',
  GET_USER_ORDER_DETAILS_SUCCESS: 'GET_USER_ORDER_DETAILS_SUCCESS',
  GET_USER_ORDER_DETAILS_FAILURE: 'GET_USER_ORDER_DETAILS_FAILURE',
};
