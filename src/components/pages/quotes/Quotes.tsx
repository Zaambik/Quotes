import { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchQuotes, getQuotes, quotesStatus, refreshQuotes } from '../../../redux/slice/quotes.slice';

import useOutside from '../../../hooks/useOutside';

import QuotesTable from '../../ui/quotes-table/QuotesTable';
import Modal from '../../ui/modal/Modal';

import styles from './Quotes.module.scss';


type props = {};

const Quotes: FC<props> = ({}) => {
   const quotes = useAppSelector(getQuotes);
   const status = useAppSelector(quotesStatus);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const onPage = useRef(true);
   const { ref, isShow, setIsShow } = useOutside(false);

   useEffect(() => {
      const refreshData = () => {
         if (onPage.current) {
            dispatch(fetchQuotes());
            setTimeout(refreshData, 5000);
         }
      };
      refreshData();

      return () => {
         onPage.current = false;
         console.log('unmounting');
      };
   }, [onPage.current]);

   if (!quotes) return <h2 className={styles.loading}>загрузка...</h2>;

   if (status === 'error') {
      navigate('/');
      alert('произошла ошибка, попробуйте позже');
   }

   return (
      <>
         <div className={styles.container}>
            <h1>страница котировок с биржи</h1>
            <div className={styles.wrapper}>
               <h2>Таблица котировок</h2>
               <QuotesTable isShow={isShow} setIsShow={() => setIsShow(!isShow)} array={quotes} />
            </div>
         </div>
         {isShow && (
            <div ref={ref} className={styles.modal}>
               <h3>Подробнее</h3>
               <span>
                  <h4>Название</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Максимальная цена</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Актуальность</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Дневной минимум</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Дневной максимум</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Коэффицент</h4>
                  <p></p>
               </span>
               <span>
                  <h4>Регион</h4>
                  <p></p>
               </span>
            </div>
         )}
      </>
   );
};

export default Quotes;
