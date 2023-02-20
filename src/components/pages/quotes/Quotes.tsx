import { FC, useState, useEffect } from 'react';

import styles from './Quotes.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const Quotes: FC<props> = ({ setActivePage }) => {
   return (
      <>
         <h1>Quotes</h1>
      </>
   );
};

export default Quotes;
