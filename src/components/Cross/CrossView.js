import React from 'react';
import { translations } from '../../constants/translations';

const CrossView = ({ onClickFunction }) => {
  const { cross } = translations;

  return <i onClick={onClickFunction} className={cross.className}></i>;
};

export default CrossView;
