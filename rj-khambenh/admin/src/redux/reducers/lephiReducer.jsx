import { lephiTypes } from "../types";

const initialState = {
  lephis: [],
  lephi: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case lephiTypes.GET_LEPHIS_START:
      return {
        lephis: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case lephiTypes.GET_LEPHIS_SUCCESS:
      return {
        lephis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case lephiTypes.GET_LEPHIS_FAILURE:
      return {
        lephis: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case lephiTypes.GET_LEPHI_START:
      return {
        lephi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case lephiTypes.GET_LEPHI_SUCCESS:
      return {
        lephi: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case lephiTypes.GET_LEPHI_FAILURE:
      return {
        lephi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case lephiTypes.CREATE_LEPHI_START:
      return {
        lephi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case lephiTypes.CREATE_LEPHI_SUCCESS:
      console.log(state);
      return {
        lephis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case lephiTypes.CREATE_LEPHI_FAILURE:
      return {
        lephi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case lephiTypes.UPDATE_LEPHI_START:
      return {
        lephi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case lephiTypes.UPDATE_LEPHI_SUCCESS:
      return {
        lephis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case lephiTypes.UPDATE_LEPHI_FAILURE:
      return {
        lephi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case lephiTypes.DELETE_LEPHI_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case lephiTypes.DELETE_LEPHI_SUCCESS:
      return {
        lephis: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case lephiTypes.DELETE_LEPHI_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    default:
      return state;
  }
};

export default reducer;
