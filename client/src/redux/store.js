import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// 1 - abaixo tenho tutorail redux-persist,
// 2 - Há apenas um reducer, devo add Combine reducer para mais reducer. abaixo tambem
// https://www.youtube.com/watch?v=b88Z5POQBwI

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSliceReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

//         '----------------------------------'
// wihout persistence configuration it would be like JUST IT

// const store = configureStore({
//   reducer: {
//     user: authSliceReducer,
//   },
// });

// export default store;
