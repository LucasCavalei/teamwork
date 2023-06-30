import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  provider: null, // Armazena o provedor de autenticação (por exemplo, 'google', 'facebook', etc.)
  isAuthenticated: false,
  authUser: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProvider: (state, action) => {
      state.provider = action.payload;
    },

    setIsAuthenticated: (state, action) => {
      // state.isAuthenticated = true;
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      {
        console.log(' authUser in reducer', state.authUser.user);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authUser = null;
    },
  },
});

export const { setProvider, setIsAuthenticated, setAuthUser, logout } =
  authSlice.actions;
export default authSlice.reducer;
