import React, { useState } from 'react';
import Note from '../note/note';
import './Main.css';

const Main = () => {

  const [note, setNote] = useState('');
  const [notesArray, setNotesArray] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  const newToDo= () => {
    notesArray.push(note);
    setShowNotes(true)
    setNote('');
  }

  const handleChange = e => setNote(e.target.value);

  const remove = i =>{
    setNotesArray(notesArray.splice(i,1));
    console.log('remove '+ i )}


  const handleTest =e => e.charCode === 13 ? newToDo() : '';

  return (
    <div className="background">
      <input placeholder="New To Do" value={note} onChange={handleChange} onKeyPress={handleTest}/>
        <i onClick={newToDo} className="fas fa-plus"></i>
        {showNotes ? <Note notesArray = {notesArray} remove={remove}/> : ''}
    </div>
  )
}

export default Main;
