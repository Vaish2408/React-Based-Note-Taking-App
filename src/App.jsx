import { useState } from "react";
import "./App.css";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import defaultNotes from "./notes";

function App() {
  const [notes, setNotes] = useState(defaultNotes);

  function addNote(newNote) {
    // console.log(note);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      {/* <Note title="This is the title" content="This is note content" /> */}

      {/* {notes.map(createNotes)} */}

      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
