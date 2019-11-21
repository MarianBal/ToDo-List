import React from 'react';
import Button from '../button';
import { translations } from '../../constants/translations';
import './note.css';

const Note = ({ notesArray, remove }) => {
  const { note } = translations;
  return (
    <div className={note.className.container}>
      {notesArray.map((note, index) => (
        <div className={note.className.note}>
          <Button remove={remove} index={index} />
          {note}
        </div>
      ))}
    </div>
  );
};
export default Note;
