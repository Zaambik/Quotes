import { FC, useState, useEffect } from 'react';

import styles from './Footer.module.scss';

import iconGitHub from '../../../assets/imgs/github-icon.svg';
import iconTg from '../../../assets/imgs/telegram-icon.svg';

const Footer: FC = () => {
   return (
      <footer>
         <div className={styles.container}>
            <span className={styles.about}>
               <h3>О нас</h3>
               <p>Мы - амбициозная команда разработчиков. Следуем своим целям на пути к самореализации и перспективному развитию!</p>
            </span>
            <span className={styles.links}>
               <a href="https://github.com/Zaambik/CloudFactory" target="_blank">
                  <img src={iconGitHub} width="40px" />
               </a>
               <a href="https://t.me/BUR_mister" target="_blank">
                  <img src={iconTg} width="40px" />
               </a>
            </span>
            <span className={styles.contacts}>
               <h3>Контакты</h3>
               <ul>
                  <li>
                     <a href="tel:+79653774487">+7(965) 377-44-87</a>
                  </li>
                  <li>
                     <a href="tel:+79771710774">+7(977) 171-07-74</a>
                  </li>
               </ul>
            </span>
         </div>
      </footer>
   );
};

export default Footer;
