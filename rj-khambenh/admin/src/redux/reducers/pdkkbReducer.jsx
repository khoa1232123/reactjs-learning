import { pdkkbTypes } from "../types";

const initialState = {
  pdkkbs: [],
  pdkkb: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case pdkkbTypes.GET_PDKKBS_START:
      return {
        pdkkbs: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case pdkkbTypes.GET_PDKKBS_SUCCESS:
      return {
        pdkkbs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pdkkbTypes.GET_PDKKBS_FAILURE:
      return {
        pdkkbs: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pdkkbTypes.GET_PDKKB_START:
      return {
        pdkkb: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pdkkbTypes.GET_PDKKB_SUCCESS:
      return {
        pdkkb: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pdkkbTypes.GET_PDKKB_FAILURE:
      return {
        pdkkb: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pdkkbTypes.CREATE_PDKKB_START:
      return {
        pdkkb: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pdkkbTypes.CREATE_PDKKB_SUCCESS:
      console.log(state);
      return {
        pdkkbs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pdkkbTypes.CREATE_PDKKB_FAILURE:
      return {
        pdkkb: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pdkkbTypes.UPDATE_PDKKB_START:
      return {
        pdkkb: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case pdkkbTypes.UPDATE_PDKKB_SUCCESS:
      return {
        pdkkbs: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case pdkkbTypes.UPDATE_PDKKB_FAILURE:
      return {
        pdkkb: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case pdkkbTypes.DELETE_PDKKB_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case pdkkbTypes.DELETE_PDKKB_SUCCESS:
      return {
        pdkkbs: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case pdkkbTypes.DELETE_PDKKB_FAILURE:
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
