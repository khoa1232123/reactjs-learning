import { categoryTypes } from '../types';

const initState = {
  categories: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case categoryTypes.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
    case categoryTypes.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case categoryTypes.ADD_NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryTypes.ADD_NEW_CATEGORY_SUCCESS:
      // const category = action.payload.category;
      // const updateCat = buildNewCategories(
      //   category.parentId,
      //   state.categories,
      //   category
      // );
      // console.log(updateCat);
      return {
        ...state,
        // categories: updateCat,
        loading: false,
      };
    case categoryTypes.ADD_NEW_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
