import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';

const store = configureStore({
  reducer: {
    theModal: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;