import axios from "src/helpers/axios";
import { khoaTypes } from "../types";

// Get All Posts
const getKhoasStart = () => ({
  type: khoaTypes.GET_KHOAS_START,
});

const getKhoasSuccess = (khoas) => ({
  type: khoaTypes.GET_KHOAS_SUCCESS,
  payload: khoas,
});

const getKhoasFailure = () => ({
  type: khoaTypes.GET_KHOAS_FAILURE,
});

const getKhoas = () => {
  return async (dispatch) => {
    dispatch(getKhoasStart());
    try {
      const res = await axios.get("/khoa");

      console.log(res.data);

      dispatch(getKhoasSuccess(res.data));
    } catch (error) {
      dispatch(getKhoasFailure());
    }
  };
};

// Get One Post
const getKhoaStart = () => ({
  type: khoaTypes.GET_KHOA_START,
});

const getKhoaSuccess = (khoa) => ({
  type: khoaTypes.GET_KHOA_SUCCESS,
  payload: khoa,
});

const getKhoaFailure = () => ({
  type: khoaTypes.GET_KHOA_FAILURE,
});

const getKhoa = (id) => {
  return async (dispatch) => {
    dispatch(getKhoaStart());
    try {
      const res = await axios.get("/khoa/" + id);

      dispatch(getKhoaSuccess(res.data));
    } catch (error) {
      dispatch(getKhoaFailure());
    }
  };
};

// Create Post
const createKhoaStart = () => ({
  type: khoaTypes.CREATE_KHOA_START,
});

const createKhoaSuccess = (khoas) => ({
  type: khoaTypes.CREATE_KHOA_SUCCESS,
  payload: khoas,
});

const createKhoaFailure = () => ({
  type: khoaTypes.CREATE_KHOA_FAILURE,
});

const createKhoa = (khoa) => {
  return async (dispatch, getState) => {
    const {
      khoa: { khoas },
    } = getState();
    console.log(getState());
    dispatch(createKhoaStart());
    try {
      const res = await axios.post("/khoa", khoa);
      console.log(res);

      dispatch(createKhoaSuccess([res.data, ...khoas]));
    } catch (error) {
      dispatch(createKhoaFailure());
    }
  };
};

// Create Post
const deleteKhoaStart = () => ({
  type: khoaTypes.DELETE_KHOA_START,
});

const deleteKhoaSuccess = (khoas) => ({
  type: khoaTypes.DELETE_KHOA_SUCCESS,
  payload: khoas,
});

const deleteKhoaFailure = () => ({
  type: khoaTypes.DELETE_KHOA_FAILURE,
});

const deleteKhoa = (khoa) => {
  return async (dispatch, getState) => {
    const {
      khoa: { khoas },
    } = getState();
    dispatch(deleteKhoaStart());
    try {
      await axios.delete("/khoa/" + khoa._id);
      const newkhoas = khoas.filter((item) => item._id !== khoa._id);
      dispatch(deleteKhoaSuccess(newkhoas));
    } catch (error) {
      console.log("looix");
      dispatch(deleteKhoaFailure());
    }
  };
};

// Update Post
const updateKhoaStart = () => ({
  type: khoaTypes.UPDATE_KHOA_START,
});

const updateKhoaSuccess = (khoas) => ({
  type: khoaTypes.UPDATE_KHOA_SUCCESS,
  payload: khoas,
});

const updateKhoaFailure = () => ({
  type: khoaTypes.UPDATE_KHOA_FAILURE,
});

const updateKhoa = (khoa) => {
  console.log(khoa);
  return async (dispatch, getState) => {
    const {
      khoa: { khoas },
    } = getState();
    dispatch(updateKhoaStart());
    try {
      const res = await axios.put("/khoa/" + khoa._id, khoa);
      console.log(res);

      let index = khoas.findIndex((item) => item._id === khoa._id);
      khoas[index] = khoa;

      dispatch(updateKhoaSuccess(khoas));
    } catch (error) {
      dispatch(updateKhoaFailure());
    }
  };
};

export { getKhoas, createKhoa, deleteKhoa, updateKhoa, getKhoa };
