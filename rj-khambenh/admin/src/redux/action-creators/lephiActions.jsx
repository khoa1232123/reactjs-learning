import axios from "src/helpers/axios";
import { lephiTypes } from "../types";

// Get All Posts
const getLephisStart = () => ({
  type: lephiTypes.GET_LEPHIS_START,
});

const getLephisSuccess = (lephis) => ({
  type: lephiTypes.GET_LEPHIS_SUCCESS,
  payload: lephis,
});

const getLephisFailure = () => ({
  type: lephiTypes.GET_LEPHIS_FAILURE,
});

const getLephis = () => {
  return async (dispatch) => {
    dispatch(getLephisStart());
    try {
      const res = await axios.get("/lephi");

      console.log(res.data);

      dispatch(getLephisSuccess(res.data));
    } catch (error) {
      dispatch(getLephisFailure());
    }
  };
};

// Get One Post
const getLephiStart = () => ({
  type: lephiTypes.GET_LEPHI_START,
});

const getLephiSuccess = (lephi) => ({
  type: lephiTypes.GET_LEPHI_SUCCESS,
  payload: lephi,
});

const getLephiFailure = () => ({
  type: lephiTypes.GET_LEPHI_FAILURE,
});

const getLephi = (id) => {
  return async (dispatch) => {
    dispatch(getLephiStart());
    try {
      const res = await axios.get("/lephi/" + id);

      dispatch(getLephiSuccess(res.data));
    } catch (error) {
      dispatch(getLephiFailure());
    }
  };
};

// Create Post
const createLephiStart = () => ({
  type: lephiTypes.CREATE_LEPHI_START,
});

const createLephiSuccess = (lephis) => ({
  type: lephiTypes.CREATE_LEPHI_SUCCESS,
  payload: lephis,
});

const createLephiFailure = () => ({
  type: lephiTypes.CREATE_LEPHI_FAILURE,
});

const createLephi = (lephi) => {
  return async (dispatch, getState) => {
    const {
      lephi: { lephis },
    } = getState();
    console.log(getState());
    dispatch(createLephiStart());
    try {
      const res = await axios.post("/lephi", lephi);
      console.log(res);

      dispatch(createLephiSuccess([res.data, ...lephis]));
    } catch (error) {
      dispatch(createLephiFailure());
    }
  };
};

// Create Post
const deleteLephiStart = () => ({
  type: lephiTypes.DELETE_LEPHI_START,
});

const deleteLephiSuccess = (lephis) => ({
  type: lephiTypes.DELETE_LEPHI_SUCCESS,
  payload: lephis,
});

const deleteLephiFailure = () => ({
  type: lephiTypes.DELETE_LEPHI_FAILURE,
});

const deleteLephi = (lephi) => {
  return async (dispatch, getState) => {
    const {
      lephi: { lephis },
    } = getState();
    dispatch(deleteLephiStart());
    try {
      await axios.delete("/lephi/" + lephi._id);
      const newlephis = lephis.filter((item) => item._id !== lephi._id);
      dispatch(deleteLephiSuccess(newlephis));
    } catch (error) {
      console.log("looix");
      dispatch(deleteLephiFailure());
    }
  };
};

// Update Post
const updateLephiStart = () => ({
  type: lephiTypes.UPDATE_LEPHI_START,
});

const updateLephiSuccess = (lephis) => ({
  type: lephiTypes.UPDATE_LEPHI_SUCCESS,
  payload: lephis,
});

const updateLephiFailure = () => ({
  type: lephiTypes.UPDATE_LEPHI_FAILURE,
});

const updateLephi = (lephi) => {
  console.log(lephi);
  return async (dispatch, getState) => {
    const {
      lephi: { lephis },
    } = getState();
    dispatch(updateLephiStart());
    try {
      const res = await axios.put("/lephi/" + lephi._id, lephi);

      let index = lephis.findIndex((item) => item._id === lephi._id);
      lephis[index] = res.data;

      dispatch(updateLephiSuccess(lephis));
    } catch (error) {
      dispatch(updateLephiFailure());
    }
  };
};

export { getLephis, createLephi, deleteLephi, updateLephi, getLephi };
