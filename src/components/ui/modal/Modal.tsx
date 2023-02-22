import { FC } from 'react';

type props = {
   open: boolean;
   onClose: () => void;
   ref: any;
};

import styles from './Modal.module.scss';

const Modal: FC<props> = ({ ref, open, onClose }) => {
   if (!open) return null;
   return (
      <div className={styles.container}></div>
   );
};

export default Modal;

//          <p className={styles.closeBtn} onClick={onClose}>
//             X
//          </p>
