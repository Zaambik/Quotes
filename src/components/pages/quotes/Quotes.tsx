import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchQuotes, getQuotes } from '../../../redux/slice/quotesSlice';

import styles from './Quotes.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const Quotes: FC<props> = ({ setActivePage }) => {
   const quotes = useAppSelector(getQuotes);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchQuotes());
   }, []);

   if (quotes.length === 0) return <>loading</>

   return (
      <>
         <h1>Quotes</h1>
         {
            quotes.map((quote, index) => (
               <span key={index}>{quote?.currency}</span>
            )) 
         }
      </>
   );
};

export default Quotes;
