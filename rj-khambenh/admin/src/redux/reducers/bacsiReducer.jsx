import { bacsiTypes } from "../types";

const initialState = {
  bacsis: [],
  bacsi: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case bacsiTypes.GET_BACSIS_START:
      return {
        bacsis: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case bacsiTypes.GET_BACSIS_SUCCESS:
      return {
        bacsis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case bacsiTypes.GET_BACSIS_FAILURE:
      return {
        bacsis: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case bacsiTypes.GET_BACSI_START:
      return {
        bacsi: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case bacsiTypes.GET_BACSI_SUCCESS:
      return {
        bacsi: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case bacsiTypes.GET_BACSI_FAILURE:
      return {
        bacsi: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case bacsiTypes.CREATE_BACSI_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case bacsiTypes.CREATE_BACSI_SUCCESS:
      return {
        bacsis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case bacsiTypes.CREATE_BACSI_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case bacsiTypes.UPDATE_BACSI_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case bacsiTypes.UPDATE_BACSI_SUCCESS:
      return {
        bacsis: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case bacsiTypes.UPDATE_BACSI_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    case bacsiTypes.DELETE_BACSI_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case bacsiTypes.DELETE_BACSI_SUCCESS:
      return {
        bacsis: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case bacsiTypes.DELETE_BACSI_FAILURE:
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
