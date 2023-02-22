import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './slice/quotes.slice';
import modalDataReducer from './slice/modal.slice'

export const store = configureStore({
   reducer: {
      quotes: productsReducer,
      modalData: modalDataReducer
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
