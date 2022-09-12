import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import config from "../resources/backend";
import Context from "./Context";
import Note from "./Note";

function Notes() {
  const context = useContext(Context);

  const [notes, setNotes] = useState([]);

  axios
    .get(`${config.url}/notes/${context.user}`)
    .then(({ data }) => {
      setNotes(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return notes.map((note) => {
    return (
      <Note
        id={note.id}
        key={note.id}
        note={note.note}
        title={note.title}
        user={note.user}
      />
    );
  });
}

export default Notes;
