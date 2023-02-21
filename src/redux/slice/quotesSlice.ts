import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface IQuotes {
   quotes: [];
   status: 'loading' | 'success' | 'error';
}

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
   const options = {
      method: 'GET',
      url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_losers',
      params: { start: '0' },
      headers: {
         'X-RapidAPI-Key': '9af2b9dddfmshbea5120665c2c33p10b4c4jsnf46a77c0a491',
         'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
      },
   };

   const { data } = await axios.request(options);
   return data.quotes;
});

const initialState: IQuotes = {
   quotes: [],
   status: 'loading', // loading | success | error
};

export const quotesSlice = createSlice({
   name: 'quotes',
   initialState,
   reducers: {
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchQuotes.pending, (state) => {
         state.status = 'loading';
         state.quotes = [];
      });
      builder.addCase(fetchQuotes.fulfilled, (state, action) => {
         state.status = 'success';
         state.quotes = action.payload;
      });
      builder.addCase(fetchQuotes.rejected, (state) => {
         state.status = 'error';
         state.quotes = [];
      });
   },
});

//Alternative to useSelector
export const getQuotes = (state: RootState) => state.quotes.quotes;
export const quotesStatus = (state: RootState) => state.quotes.status;

export const { updateStatus } = quotesSlice.actions;

export default quotesSlice.reducer;
