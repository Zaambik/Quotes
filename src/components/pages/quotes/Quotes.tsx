import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchQuotes, getQuotes, quotesStatus } from '../../../redux/slice/quotes.slice';
import { getModalData } from '../../../redux/slice/modal.slice';

import useOutside from '../../../hooks/useOutside';
import QuotesTable from '../../ui/quotes-table/QuotesTable';

import styles from './Quotes.module.scss';
import closeImg from './imgs/close.svg'


const Quotes: FC = () => {
   const quotes = useAppSelector(getQuotes);
   const status = useAppSelector(quotesStatus);
   const modalData = useAppSelector(getModalData);
   const dispatch = useAppDispatch();

   const navigate = useNavigate();

   const onPage = useRef(true);
   const { ref, isShow, setIsShow } = useOutside(false);

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Котировки';

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

   if (!quotes) return <h2 className={styles.loading}>Загрузка...</h2>;

   if (status === 'error') {
      navigate('/');
      alert('Произошла ошибка, попробуйте позже');
   }

   return (
      <>
         <div className={styles.container}>
            <h1>Страница котировок с биржи</h1>
            <div className={styles.wrapper}>
               <h2>Таблица котировок</h2>
               <QuotesTable isShow={isShow} setIsShow={() => setIsShow(!isShow)} array={quotes} />
            </div>
         </div>
         {isShow && modalData !== null && (
            <div ref={ref} className={styles.modal}>
               <button type="button" onClick={() => setIsShow(!isShow)}>
                  <img src={closeImg} />
               </button>
               <h3>Подробнее</h3>
               <span>
                  <h4>Название</h4>
                  <p>{modalData?.symbol}</p>
               </span>
               <span>
                  <h4>Актуальность</h4>
                  <p>{modalData?.actualPrice}</p>
               </span>
               <span>
                  <h4>Дневной минимум</h4>
                  <p>{modalData?.minPrice}</p>
               </span>
               <span>
                  <h4>Дневной максимум</h4>
                  <p>{modalData?.maxPrice}</p>
               </span>
               <span>
                  <h4>Коэффицент</h4>
                  <p>{modalData?.coef}</p>
               </span>
               <span>
                  <h4>Регион</h4>
                  <p>{modalData?.timeZone}</p>
               </span>
            </div>
         )}
      </>
   );
};

export default Quotes;
