import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../Feature/Auth/AuthSlice';

export const store = configureStore({
  reducer:{
    auth:AuthSlice
  },
});
