import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';

const store = configureStore({
  reducer: {
    themodal: modalReducer,
  },
});

export default store;
