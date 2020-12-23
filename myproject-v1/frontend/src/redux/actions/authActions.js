import axios from '../../helpers/axios';
import {
  getLoggedIn,
  getToken,
  resetLocalStorage,
  setLoggedIn,
  setToken,
} from '../../helps/localStorage';
import { authTypes, cartTypes } from '../types';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authTypes.LOGIN_REQUEST,
    });
    const res = await axios.post('/auth/signin', {
      ...user,
    });
    console.log(res);
    if (res.status === 200) {
      const { token, user } = res.data;
      setToken(token);
      setLoggedIn(user);
      dispatch({
        type: authTypes.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authTypes.LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = getToken();
    if (token) {
      const user = getLoggedIn();
      dispatch({
        type: authTypes.LOGIN_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: authTypes.LOGIN_FAILURE,
        payload: {
          error: 'Falsed to login',
        },
      });
    }
  };
};

export const signout = () => {
  return (dispatch) => {
    console.log('abc signout');
    dispatch({ type: authTypes.LOGOUT_REQUEST });
    resetLocalStorage();
    dispatch({
      type: authTypes.LOGOUT_SUCCESS,
    });
    dispatch({
      type: cartTypes.RESET_CART,
    });

    // const res = await axios.post('/admin/signout');
    // if (res.status === 200) {
    // } else {
    //   dispatch({
    //     type: authTypes.LOGOUT_FAILURE,
    //     payload: { error: res.data.error },
    //   });
    // }
  };
};
