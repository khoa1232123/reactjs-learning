import axios from "src/helpers/axios";
import { pdkkbTypes } from "../types";

// Get All Posts
const getPdkkbsStart = () => ({
  type: pdkkbTypes.GET_PDKKBS_START,
});

const getPdkkbsSuccess = (pdkkbs) => ({
  type: pdkkbTypes.GET_PDKKBS_SUCCESS,
  payload: pdkkbs,
});

const getPdkkbsFailure = () => ({
  type: pdkkbTypes.GET_PDKKBS_FAILURE,
});

const getPdkkbs = () => {
  return async (dispatch) => {
    dispatch(getPdkkbsStart());
    try {
      const res = await axios.get("/phieudangkykhambenh");

      console.log(res.data);

      dispatch(getPdkkbsSuccess(res.data));
    } catch (error) {
      dispatch(getPdkkbsFailure());
    }
  };
};

// Get One Post
const getPdkkbStart = () => ({
  type: pdkkbTypes.GET_PDKKB_START,
});

const getPdkkbSuccess = (pdkkb) => ({
  type: pdkkbTypes.GET_PDKKB_SUCCESS,
  payload: pdkkb,
});

const getPdkkbFailure = () => ({
  type: pdkkbTypes.GET_PDKKB_FAILURE,
});

const getPdkkb = (id) => {
  return async (dispatch) => {
    dispatch(getPdkkbStart());
    try {
      const res = await axios.get("/phieudangkykhambenh/" + id);

      dispatch(getPdkkbSuccess(res.data));
    } catch (error) {
      dispatch(getPdkkbFailure());
    }
  };
};

// Create Post
const createPdkkbStart = () => ({
  type: pdkkbTypes.CREATE_PDKKB_START,
});

const createPdkkbSuccess = (pdkkbs) => ({
  type: pdkkbTypes.CREATE_PDKKB_SUCCESS,
  payload: pdkkbs,
});

const createPdkkbFailure = () => ({
  type: pdkkbTypes.CREATE_PDKKB_FAILURE,
});

const createPdkkb = (pdkkb) => {
  return async (dispatch, getState) => {
    const {
      pdkkb: { pdkkbs },
    } = getState();
    console.log(getState());
    dispatch(createPdkkbStart());
    try {
      const res = await axios.post("/phieudangkykhambenh", pdkkb);
      console.log(res);

      dispatch(createPdkkbSuccess([res.data, ...pdkkbs]));
    } catch (error) {
      dispatch(createPdkkbFailure());
    }
  };
};

// Create Post
const deletePdkkbStart = () => ({
  type: pdkkbTypes.DELETE_PDKKB_START,
});

const deletePdkkbSuccess = (pdkkbs) => ({
  type: pdkkbTypes.DELETE_PDKKB_SUCCESS,
  payload: pdkkbs,
});

const deletePdkkbFailure = () => ({
  type: pdkkbTypes.DELETE_PDKKB_FAILURE,
});

const deletePdkkb = (pdkkb) => {
  return async (dispatch, getState) => {
    const {
      pdkkb: { pdkkbs },
    } = getState();
    dispatch(deletePdkkbStart());
    try {
      await axios.delete("/phieudangkykhambenh/" + pdkkb._id);
      const newpdkkbs = pdkkbs.filter((item) => item._id !== pdkkb._id);
      dispatch(deletePdkkbSuccess(newpdkkbs));
    } catch (error) {
      console.log("looix");
      dispatch(deletePdkkbFailure());
    }
  };
};

// Update Post
const updatePdkkbStart = () => ({
  type: pdkkbTypes.UPDATE_PDKKB_START,
});

const updatePdkkbSuccess = (pdkkbs) => ({
  type: pdkkbTypes.UPDATE_PDKKB_SUCCESS,
  payload: pdkkbs,
});

const updatePdkkbFailure = () => ({
  type: pdkkbTypes.UPDATE_PDKKB_FAILURE,
});

const updatePdkkb = (pdkkb) => {
  console.log(pdkkb);
  return async (dispatch, getState) => {
    const {
      pdkkb: { pdkkbs },
    } = getState();
    dispatch(updatePdkkbStart());
    try {
      const res = await axios.put("/phieudangkykhambenh/" + pdkkb._id, pdkkb);

      let index = pdkkbs.findIndex((item) => item._id === pdkkb._id);
      pdkkbs[index] = res.data;

      dispatch(updatePdkkbSuccess(pdkkbs));
    } catch (error) {
      dispatch(updatePdkkbFailure());
    }
  };
};

export { getPdkkbs, createPdkkb, deletePdkkb, updatePdkkb, getPdkkb };
