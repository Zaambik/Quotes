import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import mainImg from './imgs/main.png'

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const Home: FC<props> = ({ setActivePage }) => {
   return (
      <>
         <h1>Home</h1>
         <div className={styles.container}>
            <section className={styles.text}>
               <h2>Здесь реализуются Ваши торговые идеи!</h2>
               <p>
                  Присоединяйтесь к самой умной котировочной системе современности <br /> Нам доверяют миллионы!
               </p>
               <Link to='/quotes'>Начать</Link>
            </section>
            <section className={styles.img}>
               <img src={mainImg} alt="фоновая картинка с изображением графиков и экономическийх моделей" />
            </section>
         </div>
      </>
   );
};

export default Home;
