import { FC, useEffect } from 'react';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = '404 Страница не найдена';
   }, []);

   return (
      <>
         <h2 className={styles.head}>👾 404 Страница не найдена {':('} 👾</h2>
      </>
   );
};

export default NotFound;
