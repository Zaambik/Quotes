import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './slice/quotes.slice';

export const store = configureStore({
   reducer: {
      quotes: productsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
