import { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          id=""
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          id=""
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
