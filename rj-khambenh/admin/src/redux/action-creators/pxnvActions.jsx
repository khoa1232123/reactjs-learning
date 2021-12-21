import axios from "src/helpers/axios";
import { pxnvTypes } from "../types";

// Get All Posts
const getPxnvsStart = () => ({
  type: pxnvTypes.GET_PXNVS_START,
});

const getPxnvsSuccess = (pxnvs) => ({
  type: pxnvTypes.GET_PXNVS_SUCCESS,
  payload: pxnvs,
});

const getPxnvsFailure = () => ({
  type: pxnvTypes.GET_PXNVS_FAILURE,
});

const getPxnvs = () => {
  return async (dispatch) => {
    dispatch(getPxnvsStart());
    try {
      const res = await axios.get("/phieuxuatnhapvien");

      console.log(res.data);

      dispatch(getPxnvsSuccess(res.data));
    } catch (error) {
      dispatch(getPxnvsFailure());
    }
  };
};

// Get One Post
const getPxnvStart = () => ({
  type: pxnvTypes.GET_PXNV_START,
});

const getPxnvSuccess = (pxnv) => ({
  type: pxnvTypes.GET_PXNV_SUCCESS,
  payload: pxnv,
});

const getPxnvFailure = () => ({
  type: pxnvTypes.GET_PXNV_FAILURE,
});

const getPxnv = (id) => {
  return async (dispatch) => {
    dispatch(getPxnvStart());
    try {
      const res = await axios.get("/phieuxuatnhapvien/" + id);

      dispatch(getPxnvSuccess(res.data));
    } catch (error) {
      dispatch(getPxnvFailure());
    }
  };
};

// Create Post
const createPxnvStart = () => ({
  type: pxnvTypes.CREATE_PXNV_START,
});

const createPxnvSuccess = (pxnvs) => ({
  type: pxnvTypes.CREATE_PXNV_SUCCESS,
  payload: pxnvs,
});

const createPxnvFailure = () => ({
  type: pxnvTypes.CREATE_PXNV_FAILURE,
});

const createPxnv = (pxnv) => {
  return async (dispatch, getState) => {
    const {
      pxnv: { pxnvs },
    } = getState();
    console.log(getState());
    dispatch(createPxnvStart());
    try {
      const res = await axios.post("/phieuxuatnhapvien", pxnv);
      console.log(res);

      dispatch(createPxnvSuccess([res.data, ...pxnvs]));
    } catch (error) {
      dispatch(createPxnvFailure());
    }
  };
};

// Create Post
const deletePxnvStart = () => ({
  type: pxnvTypes.DELETE_PXNV_START,
});

const deletePxnvSuccess = (pxnvs) => ({
  type: pxnvTypes.DELETE_PXNV_SUCCESS,
  payload: pxnvs,
});

const deletePxnvFailure = () => ({
  type: pxnvTypes.DELETE_PXNV_FAILURE,
});

const deletePxnv = (pxnv) => {
  return async (dispatch, getState) => {
    const {
      pxnv: { pxnvs },
    } = getState();
    dispatch(deletePxnvStart());
    try {
      await axios.delete("/phieuxuatnhapvien/" + pxnv._id);
      const newpxnvs = pxnvs.filter((item) => item._id !== pxnv._id);
      dispatch(deletePxnvSuccess(newpxnvs));
    } catch (error) {
      console.log("looix");
      dispatch(deletePxnvFailure());
    }
  };
};

// Update Post
const updatePxnvStart = () => ({
  type: pxnvTypes.UPDATE_PXNV_START,
});

const updatePxnvSuccess = (pxnvs) => ({
  type: pxnvTypes.UPDATE_PXNV_SUCCESS,
  payload: pxnvs,
});

const updatePxnvFailure = () => ({
  type: pxnvTypes.UPDATE_PXNV_FAILURE,
});

const updatePxnv = (pxnv) => {
  console.log(pxnv);
  return async (dispatch, getState) => {
    const {
      pxnv: { pxnvs },
    } = getState();
    dispatch(updatePxnvStart());
    try {
      const res = await axios.put("/phieuxuatnhapvien/" + pxnv._id, pxnv);

      let index = pxnvs.findIndex((item) => item._id === pxnv._id);
      pxnvs[index] = res.data;

      dispatch(updatePxnvSuccess(pxnvs));
    } catch (error) {
      dispatch(updatePxnvFailure());
    }
  };
};

export { getPxnvs, createPxnv, deletePxnv, updatePxnv, getPxnv };
