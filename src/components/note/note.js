import React from 'react';
import Button from '../button/button'
import './note.css';

const Note = ({ notesArray, remove }) =>{

    return (
        <div className="contenedor">
          {notesArray.map((n, index)=><div className="nota"><Button remove = {remove} index={index}/>{n}</div>)}
        </div>
    );
}
  export default Note;
