import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import mainImg from './imgs/main.png';


const Home: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Главная'
   }, []);

   return (
      <>
         <h1>главная страница приложения</h1>
         <div className={styles.container}>
            <section className={styles.text}>
               <h2>Здесь реализуются Ваши торговые амбиции!</h2>
               <p>
                  Присоединяйтесь к нашей умной котировочной системе, адаптированной к любым запросам будущего! <br />
                  Докажи, что готов стать лучшим, вместе с нами <br />
                  Нам доверяют миллионы!
               </p>
               <Link to="/quotes">Начать</Link>
               <div className={styles.img}>
                  <img src={mainImg} alt="фоновая картинка с изображением графиков и экономическийх моделей" />
               </div>
            </section>
         </div>
      </>
   );
};

export default Home;
