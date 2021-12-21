import { pxnvTypes } from "../types";

const initialState = {
  pxnvs: [],
  pxnv: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pxnvTypes.GET_PXNVS_START:
      return {
        pxnvs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case pxnvTypes.GET_PXNVS_SUCCESS:
      return {
        pxnvs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pxnvTypes.GET_PXNVS_FAILURE:
      return {
        pxnvs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pxnvTypes.GET_PXNV_START:
      return {
        pxnv: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pxnvTypes.GET_PXNV_SUCCESS:
      return {
        pxnv: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pxnvTypes.GET_PXNV_FAILURE:
      return {
        pxnv: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pxnvTypes.CREATE_PXNV_START:
      return {
        pxnv: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pxnvTypes.CREATE_PXNV_SUCCESS:
      console.log(state);
      return {
        pxnvs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pxnvTypes.CREATE_PXNV_FAILURE:
      return {
        pxnv: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pxnvTypes.UPDATE_PXNV_START:
      return {
        pxnv: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pxnvTypes.UPDATE_PXNV_SUCCESS:
      return {
        pxnvs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pxnvTypes.UPDATE_PXNV_FAILURE:
      return {
        pxnv: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pxnvTypes.DELETE_PXNV_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case pxnvTypes.DELETE_PXNV_SUCCESS:
      return {
        pxnvs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case pxnvTypes.DELETE_PXNV_FAILURE:
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
