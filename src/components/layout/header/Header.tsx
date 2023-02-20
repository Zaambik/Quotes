import { FC, useState, useEffect } from 'react';

import styles from './Header.mosule.scss';

type props = {
   activePage: string;
};

const pages = [
   { name: 'About', path: '/' },
   { name: 'Quotes', path: '/quotes' },
];

const Header: FC<props> = ({ activePage }) => {
   return (
      <header>
         <nav>
            <ul>
               <li>About</li>
               <li>Quotes</li>
            </ul>
         </nav>
      </header>
   )
};

export default Header;
