import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import mainImg from './imgs/main.png';

type props = {};

const Home: FC<props> = ({}) => {
   return (
      <>
         <h1>главная страница приложения</h1>
         <div className={styles.container}>
            <section className={styles.text}>
               <h2>Здесь реализуются Ваши торговые идеи!</h2>
               <p>
                  Присоединяйтесь к самой умной котировочной системе современности <br /> Нам доверяют миллионы!
               </p>
               <Link to="/quotes">Начать</Link>
               <section className={styles.info}>
                  <img src={mainImg} alt="фоновая картинка с изображением графиков и экономическийх моделей" />
               </section>
            </section>
            {/* <section className={styles.info}>
               <img src={mainImg} alt="фоновая картинка с изображением графиков и экономическийх моделей" />
            </section> */}
         </div>
      </>
   );
};

export default Home;
