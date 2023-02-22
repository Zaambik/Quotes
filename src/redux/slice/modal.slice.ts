import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type quote = {
   symbol: string;
   actualPrice: string;
   maxPrice: string;
   coef: string;
   timeZone: string;
   minPrice: number;
};

interface IModalData {
   modalData: quote | null;
}

const initialState: IModalData = {
   modalData: null,
};

export const modalSlice = createSlice({
   name: 'modalData',
   initialState,
   reducers: {
      refreshModalData: (state, action) => {
         state.modalData = action.payload;
      },
   },
});

//Alternative to useSelector
export const getModalData = (state: RootState) => state.modalData.modalData;

export const { refreshModalData } = modalSlice.actions;

export default modalSlice.reducer;
