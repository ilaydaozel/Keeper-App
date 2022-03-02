import React, {useState} from "react";


function CreateArea(props) {
  const [newNote, setNewNote] = useState({
      title: "",
      content: ""  });


function takeNote(event){
    const {name, value}=event.target;
    setNewNote((prevValue)=>{
        return{
            ...prevValue,
            [name]: value
        }
    })

  }
  
  function handleSubmit(event){
      event.preventDefault();
      setNewNote({title:"", content:""})
  }
 
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={takeNote}  name="title"value={newNote.title} placeholder="Title" />
        <textarea onChange={takeNote}  name="content" value={newNote.content} placeholder="Take a note..." rows="3" />
        <button onClick={()=>{props.addItem(newNote)}} type="submit">Added</button>
      </form>
    </div>
  );
}

export default CreateArea;
