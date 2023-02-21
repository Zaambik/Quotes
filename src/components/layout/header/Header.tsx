import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

type props = {
   activePage: string;
};

const pages = [
   { name: 'Главная', path: '/', value: 'Home' },
   { name: 'Котировки', path: '/quotes', value: 'Quotes' },
];

const Header: FC<props> = ({ activePage }) => {
   return (
      <header>
         <div className={styles.container}>
            <span className={styles.logo}>
               <h2>Quotes</h2>
            </span>
            <nav>
               <ul>
                  {pages.map((item, index) => (
                     <li key={index} className={activePage.toLowerCase() === item.name.toLowerCase() ? `${styles.activePage}` : ''}>
                        <Link to={item.path}>{item.name}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
