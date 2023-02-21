import { FC, useState, useEffect } from 'react';
import { IQuote } from '../../../redux/types/quotes.types';
import TableSection from './table-section/TableSection';

import styles from './QuotesTable.module.scss';

type props = {
   array: IQuote[];
};

const QuotesTable: FC<props> = ({ array }) => {
   return (
      <div className={styles.table}>
         {array.map(({ symbol, regularMarketPrice, regularMarketDayHigh, regularMarketChange }, index) => (
            <TableSection
               symbol={symbol}
               regularMarketPrice={regularMarketPrice}
               regularMarketDayHigh={regularMarketDayHigh}
               regularMarketChange={regularMarketChange}
            />
         ))}
      </div>
   );
};

export default QuotesTable;
