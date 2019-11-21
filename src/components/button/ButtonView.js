import React from 'react';
import './button.css';
import { translations } from '../../constants/translations';

const ButtonView = ({ remove, index }) => {
  const { button } = translations;
  return <i onClick={remove(index)} className={button.className}></i>;
};

export default ButtonView;
