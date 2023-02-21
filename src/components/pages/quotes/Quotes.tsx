import { FC, useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchQuotes, getQuotes } from '../../../redux/slice/quotesSlice';

import styles from './Quotes.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const Quotes: FC<props> = ({ setActivePage }) => {
   const quotes = useAppSelector(getQuotes)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchQuotes())
   }, [])

   return (
      <>
         <h1>Quotes</h1>
         {/* {quotes.map((index) => (
            <span key={index}>123456</span>
         ))} */}
      </>
   );
};

export default Quotes;
