import { FC, useState, useEffect } from 'react';

import styles from './TableSection.module.scss';

type props = {
   symbol: string;
   regularMarketPrice: number;
   regularMarketDayHigh: number;
   regularMarketChange: number;
};

const TableSection: FC<props> = ({ symbol, regularMarketPrice, regularMarketDayHigh, regularMarketChange }) => {
   return (
      <div className={styles.table__section}>
         <span>
            <h3>{symbol}</h3>
         </span>
         <span>
            <h3>max цена</h3>
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
      </div>
   );
};

export default TableSection;
