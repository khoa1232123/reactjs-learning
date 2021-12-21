// import { api } from '../urlConfig';
// import store from '../redux/store';
// import { authTypes } from '../redux/types';
import Axios from "axios";

// const axios = Axios.create({
//   baseURL: "https://node-khambenh.herokuapp.com/api",
// });

// import { getToken } from "../helps/localStorage";

const token = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).accessToken
  : "";
const axios = Axios.create({
  baseURL: "https://node-khambenh.herokuapp.com/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
// axios.interceptors.request.use((req) => {
//   const { auth } = store.getState();
//   if (auth.token) {
//     req.headers.Authorization = `Bearer ${auth.token}`;
//   }
//   return req;
// });

// axios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//       localStorage.clear();
//       store.dispatch({ type: authTypes.LOGIN_SUCCESS });
//     }
//     return Promise.reject(error);
//   }
// );

export default axios;
