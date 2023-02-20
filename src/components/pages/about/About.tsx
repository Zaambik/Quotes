import { FC, useState, useEffect } from 'react';

import styles from './About.module.scss';

type props = {
   setActivePage: (value: React.SetStateAction<string>) => void;
};

const About: FC<props> = ({ setActivePage }) => {
   return (
      <>
         <h1>About</h1>
      </>
   );
};

export default About;
