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
      // state.isAuthenticated = true;
      state.isAuthenticated = action.payload;
      {
        console.log('sou atuhUser no reducer', state.authUser);
      }
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      {
        console.log(' authUser in reducer', state.authUser);
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
