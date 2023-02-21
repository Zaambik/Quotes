import { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchQuotes, getQuotes, quotesStatus } from '../../../redux/slice/quotes.slice';

import QuotesTable from '../../ui/quotes-table/QuotesTable';

import styles from './Quotes.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const Quotes: FC<props> = ({ setActivePage }) => {
   const quotes = useAppSelector(getQuotes);
   const status = useAppSelector(quotesStatus);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const [refresh, setRefresh] = useState(false);

   useEffect(() => {
      if (!refresh) {
         dispatch(fetchQuotes());
         setRefresh(true);
      }
   }, [refresh]);

   setTimeout(() => {
      setRefresh(false);
   }, 25000);

   if (!quotes) return <h2 className={styles.loading}>загрузка...</h2>;

   if (status === 'error') {
      navigate('/');
      alert('произошла ошибка, попробуйте позже');
   }

   return (
      <>
         <h1>страница котировок с биржи</h1>
         <div className={styles.container}>
            <QuotesTable array={quotes} />
         </div>
      </>
   );
};

export default Quotes;
