import { IQuote } from '../types/quotes.types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface IQuotes {
   quotes: IQuote[] | null;
   status: 'loading' | 'success' | 'error';
}

const options = {
   method: 'GET',
   url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/co/collections/day_losers',
   params: { start: '0' },
   headers: {
      'X-RapidAPI-Key': '9af2b9dddfmshbea5120665c2c33p10b4c4jsnf46a77c0a491',
      'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
   },
};

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
   try {
      const { data } = await axios.request(options);
      return data.quotes;
   } catch (error) {
      console.log(error);
   }
});

const initialState: IQuotes = {
   quotes: null,
   status: 'loading', // loading | success | error
};

export const quotesSlice = createSlice({
   name: 'quotes',
   initialState,
   reducers: {
      refreshQuotes: (state) => {
         try {
            const refreshQuotes = async () => {
               const { data } = await axios.request(options);
               state.quotes =  data.quotes;
            }
            refreshQuotes()
         } catch (error) {
            console.log(error);
         }
      },
      updateStatus: (state, action: PayloadAction<'loading' | 'success' | 'error'>) => {
         state.status = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchQuotes.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(fetchQuotes.fulfilled, (state, action) => {
         state.status = 'success';
         state.quotes = action.payload;
      });
      builder.addCase(fetchQuotes.rejected, (state) => {
         state.status = 'error';
         state.quotes = null;
      });
   },
});

//Alternative to useSelector
export const getQuotes = (state: RootState) => state.quotes.quotes;
export const quotesStatus = (state: RootState) => state.quotes.status;

export const { updateStatus } = quotesSlice.actions;
export const { refreshQuotes } = quotesSlice.actions;

export default quotesSlice.reducer;
