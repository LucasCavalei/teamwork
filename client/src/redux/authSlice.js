import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  authUser: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.data;
      {
        console.log('sou atuhUser no reducer', state.authUser);
      }
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload.data;
      {
        console.log('sou atuhUser no reducer', state.authUser);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authUser = null;
    },
  },
});

export const { setIsAuthenticated, setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
