import { createSlice } from '@reduxjs/toolkit';

const initialState = { authData: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.authData = action.payload;
      state.errors = null;
    },
    logout: (state) => {
      localStorage.removeItem('profile');
      state.authData = null;
      state.errors = null;
    },
    setUserInfo: (state, action) => {
      const userObject = JSON.parse(localStorage.getItem('profile'));
      userObject.result.coins = action.payload.coins;
      localStorage.setItem('profile', JSON.stringify(userObject));
      state.authData = action.payload;
      state.errors = null;
    },
    updateUser: (state, action) => {
      const userObjectNewName = JSON.parse(localStorage.getItem('profile'));
      userObjectNewName.result.name = action.payload.name;
      localStorage.setItem('profile', JSON.stringify(userObjectNewName));
      state.authData = action.payload;
      state.errors = null;
    },
    deleteUser: (state) => {
      localStorage.removeItem('profile');
      state.authData = null;
      state.errors = null;
    },
  },
});

export const { setAuth, logout, setUserInfo, updateUser, deleteUser } = authSlice.actions;

export default authSlice.reducer;