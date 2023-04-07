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
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
      {
        console.log('sou atuhUser no reducer', state.authUser);
      }
    },
  },
});

export const { setIsAuthenticated, setAuthUser } = authSlice.actions;
export default authSlice.reducer;
