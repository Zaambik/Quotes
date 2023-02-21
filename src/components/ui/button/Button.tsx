import { FC, useState, useEffect } from 'react';

type props = {
   type: 'button' | 'submit' | 'reset';
};

const Button: FC<props> = ({ type }) => {
   return <button type={type}></button>;
};

export default Button;
