import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [noteList, setNoteList] = useState([]);
    function addNote(note){
        const d = new Date();
        const id = d.getTime();
        const { title, content} = note;
        setNoteList(function(prevValue)
        {return [...prevValue, <Note key={id} id={id} deleteItem={deleteNote} title={title} content={content} />]
        });
    }

    function deleteNote(keyId){
        setNoteList((prevValues)=>{
            return prevValues.filter((value) => {
                return Number(keyId) !== Number(value.key);
              });
    });
    }

  return (
    <div>
      <Header />
      <CreateArea addItem={addNote}/>
      {noteList.map((elm)=>{ return elm })}
      <Footer />
    </div>
  );
}

export default App;
