import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocate } from '../../../hooks/useLocate';

import styles from './Header.module.scss';

const pages = [
   { name: 'Главная', path: '/', value: 'Home' },
   { name: 'Котировки', path: '/quotes', value: 'Quotes' },
];

const Header: FC = () => {
   const locate = useLocate()
   return (
      <header>
         <div className={styles.container}>
            <span className={styles.logo}>
               <Link to="/">
                  <h2>Quotes</h2>
               </Link>
            </span>
            <nav>
               <ul>
                  {pages.map((item, index) => (
                     <li key={index} className={locate.pathname.toLowerCase() === item.path.toLowerCase() ? `${styles.activePage}` : ''}>
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
