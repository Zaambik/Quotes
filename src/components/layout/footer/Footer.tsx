import { FC, useState, useEffect } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
   return (
      <footer>
         <div className={styles.container}>
            <span className={styles.about}>
               <h3>О нас</h3>
               <p>Мы - лучшая команда аналитиков на рынке котировок!</p>
            </span>
            <span className={styles.contacts}>
               <h3>Контакты</h3>
               <ul>
                  <li> +7(999) 321-11-22</li>
                  <li> +7(999) 321-11-22</li>
                  <li> +7(999) 321-11-22</li>
               </ul>
            </span>
         </div>
      </footer>
   );
};

export default Footer;
