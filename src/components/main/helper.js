export const newToDo = (notesArray, note, setShowNotes, setNote) => {
  notesArray.push(note);
  setShowNotes(true);
  setNote('');
};

export const handleChange = (e, setNote) => () => setNote(e.target.value);

export const remove = (notesArray, i, setNotesArray) => {
  const remove = notesArray.splice(i, 1);
  setNotesArray(notesArray.filter(e => e !== remove));
};

export const handleTest = (e, notesArray, note, setShowNotes, setNote) =>
  e.charCode === 13 && newToDo(notesArray, note, setShowNotes, setNote);
