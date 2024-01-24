import {
  login,
  register,
  userInfo,
  updateUsername,
  removeUser,
} from '@/api/index';
import {
  AUTH,
  AUTH_ERROR_OCCURRED,
  DELETE_USER,
  USER_ERROR_OCCURRED,
  USER_INFO,
  USER_UPDATE_NAME,
  LOGOUT
} from '@/constants/actions';

// POST /user/login
export const loginUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await login(formInput);
    dispatch({ type: AUTH, data });
    router(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({
        type: AUTH_ERROR_OCCURRED,
        payload: error.response.data.message,
      });
    } else {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: 'Auth server is down!' });
    }
  }
};

// POST /user/register
export const registerUser = (formInput, router, state) => async (dispatch) => {
  try {
    const { data } = await register(formInput);
    dispatch({ type: AUTH, data });
    router(state?.from || '/');
  } catch (error) {
    if (error.response) {
      dispatch({
        type: AUTH_ERROR_OCCURRED,
        payload: error.response.data.message,
      });
    } else {
      dispatch({ type: AUTH_ERROR_OCCURRED, payload: 'Auth server is down!' });
    }
  }
};

// GET /user/userinfo
export const getUserInfo = () => async (dispatch) => {
  try {
    const { data } = await userInfo();
    dispatch({ type: USER_INFO, data });
  } catch (error) {
    console.log(error);
  }
};

// PATCH /user/username
export const updateUserName = (formInput, router) => async (dispatch) => {
  try {
    const { data } = await updateUsername(formInput);
    dispatch({ type: USER_UPDATE_NAME, data });
    router('/');
  } catch (error) {
    if (error.response) {
      dispatch({
        type: USER_ERROR_OCCURRED,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: USER_ERROR_OCCURRED,
        payload: 'Accounts server is down!',
      });
    }
  }
};

// DELETE /user/removeuser
export const removeUserAccount = (router) => async (dispatch) => {
  try {
    await removeUser();
    dispatch({ type: DELETE_USER, payload: null });
    router('/');
  } catch (error) {
    console.log(error.response.data.message);
    if (error.response) {
      dispatch({
        type: USER_ERROR_OCCURRED,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: USER_ERROR_OCCURRED,
        payload: 'Accounts server is down!',
      });
    }
  }
};

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, errors: null };
    case LOGOUT:
      localStorage.removeItem('profile');
      return { ...state, authData: null, errors: null };
    case USER_INFO:
      const userObject = JSON.parse(localStorage.getItem('profile'));
      userObject.result.coins = action?.data.coins;
      localStorage.setItem('profile', JSON.stringify(userObject));
      return { ...state, authData: action.data, errors: null };
    case USER_UPDATE_NAME:
      const userObjectNewName = JSON.parse(localStorage.getItem('profile'));
      userObjectNewName.result.name = action?.data.name;
      localStorage.setItem('profile', JSON.stringify(userObjectNewName));
      return { ...state, authData: action.data, errors: null };
    case DELETE_USER:
      localStorage.removeItem('profile');
      return { ...state, authData: null, errors: null };
    default:
      return state;
  }
};

export default authReducer; 