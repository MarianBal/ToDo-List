import React, { useState } from 'react'; //, { useState }
import MainView from './MainView';
import { newToDo, handleChange, remove, handleTest } from './helper';
import './Main.css';
import { classNames } from '../../constants/enums/classNames';

const MainWrapper = () => {
  const { className } = classNames;
  const [note, setNote] = useState('');
  const [notesArray, setNotesArray] = useState([]);
  const [showNotes, setShowNotes] = useState(false);

  const newToDoFunction = newToDo(notesArray, note, setShowNotes, setNote);
  return (
    <MainView
      className={className.main}
      //value={'algo'}
      onChangeFunction={() => console.log('cambio')}
      onKeyPressFunction={() => console.log('onKeyPress')}
      onClickFunction={newToDoFunction}
      // showNotes,
      // notesArray,
      //remove
    />
  );

  // // const newToDo = () => {
  // //   notesArray.push(note);
  // //   setShowNotes(true);
  // //   setNote('');
  // // };
  // const handleChangeFunction = handleChange(setNote);
  // const handleTestFunction = handleTest(
  //   notesArray,
  //   note,
  //   setShowNotes,
  //   setNote
  // );
  // // const remove = i => {
  // //   const remove = notesArray.splice(i, 1);
  // //   setNotesArray(notesArray.filter(e => e !== remove));
  // // };
  // //const handleTest = e => (e.charCode === 13 ? newToDo() : '');
  // return (
  //   <MainView
  //     className='background'
  //     placeholder='New To Do'
  //     value={note}
  //     onChange={handleChangeFunction}
  //     onKeyPress={handleTestFunction}
  //     onClick={newToDo}
  //     notesArray={notesArray}
  //     remove={remove}
  //   />
  // );
};

export default MainWrapper;
