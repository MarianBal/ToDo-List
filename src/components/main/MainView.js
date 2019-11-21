import React from 'react';
import Cross from '../Cross';
import Note from '../note';
import Input from '../Input';
import { translations } from '../../constants/translations';

import './Main.css';

const MainView = (
  className,
  value,
  onChaneFunction,
  onKeyPressFunction,
  showNotes,
  notesArray,
  remove
) => {
  const { main } = translations;

  return (
    <div className={className}>
      <Input
        placeholder={main.placeholder}
        value={value}
        onChange={onChaneFunction}
        onKeyPressFunction={onKeyPressFunction}
      />
      <Cross onClickFunction={() => console.log('algo')} />
      {showNotes ? <Note notesArray={notesArray} remove={remove} /> : ''}
    </div>
  );
};

export default MainView;
