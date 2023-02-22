import { FC } from 'react';
import { IQuote } from '../../../redux/types/quotes.types';
import TableSection from './table-section/TableSection';

import styles from './QuotesTable.module.scss';

type props = {
   array: IQuote[];
   setIsShow: () => void;
   isShow: boolean;
};

const QuotesTable: FC<props> = ({ array, setIsShow, isShow }) => {
   return (
      <>
         <div className={styles.table}>
            {array.map(({ symbol, regularMarketPrice, regularMarketDayHigh, regularMarketChange }, index) => (
               <TableSection
                  key={index}
                  symbol={symbol}
                  regularMarketPrice={regularMarketPrice}
                  regularMarketDayHigh={regularMarketDayHigh}
                  regularMarketChange={regularMarketChange}
                  setOpenModal={() => setIsShow()}
               />
            ))}
         </div>
      </>
   );
};

export default QuotesTable;
