import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';



interface IQuotes {
   quotes: any;
   status: 'loading' | 'success' | 'error';
}

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async () => {
   // const { data } = await axios.get(`https://poloniex.com/public?command=returnTicker`);
   // const { data } = await axios.get('https://poloniex.com/public?command=returnTicker', {
   //    headers: {
   //       'Access-Control-Allow-Origin': '*',
   //    },
   // });
   // return data;
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
