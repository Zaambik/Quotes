import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { getModalData, refreshModalData } from '../../../../redux/slice/modal.slice';

import styles from './TableSection.module.scss';

type props = {
   symbol: string;
   regularMarketPrice: number;
   regularMarketDayHigh: number;
   regularMarketChange: number;
   setOpenModal: () => void;
   regularMarketDayLow: number;
   timeZone: string;
};

const TableSection: FC<props> = ({
   symbol,
   regularMarketPrice,
   regularMarketDayHigh,
   regularMarketChange,
   regularMarketDayLow,
   timeZone,
   setOpenModal,
}) => {
   const dispatch = useAppDispatch();

   const handleClickModal = () => {
      setOpenModal();
      dispatch(
         refreshModalData({
            symbol,
            actualPrice: regularMarketPrice,
            maxPrice: regularMarketDayHigh,
            coef: regularMarketChange,
            minPrice: regularMarketDayLow,
            timeZone
         }),
      );
   };

   return (
      <>
         <button type="button" className={styles.table__section} onClick={() => handleClickModal()}>
            <span>
               <h3>{symbol}</h3>
            </span>
            <span>
               <h3>макс. цена</h3>
               <p>{regularMarketDayHigh}</p>
            </span>
            <span>
               <h3>актуально</h3>
               <p>{regularMarketPrice}</p>
            </span>
            <span>
               <h3>коэффициент</h3>
               <p>{regularMarketChange}</p>
            </span>
         </button>
      </>
   );
};

export default TableSection;

//   return (
//      <div>
//         <button onClick={() => setOpenModal(true)} className="modalButton">
//            Modal
//         </button>
//      </div>
//   );
