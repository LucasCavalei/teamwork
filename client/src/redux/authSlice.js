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
      state.provider = action.payload.data;
    },

    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    logout: (state) => {
      state.provider = null;
      state.isAuthenticated = false;
      state.authUser = null;
      // Perform any additional logic to clear user data or perform logout actions
    },
  },
});

export const { setProvider, setIsAuthenticated, setAuthUser, logout } =
  authSlice.actions;
export default authSlice.reducer;
