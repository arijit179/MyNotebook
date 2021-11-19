import React , {useContext,useState} from "react";
import noteContext from '../context/notes/noteContext'


const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note , setNote] = useState({title:"" , description:"" , tag:""})
    const handleClick = (e)=>{
      addNote(note.title , note.description , note.tag);
      setNote({title:"" , description:"" , tag:""});
      props.showAlert("Added note successfully","success");
      e.preventDefault();
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
      <div className="container mt-4">
        <h2> Add Note </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value = {note.title} name="title" onChange = {onChange} minLength = {3} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" value = {note.description} name="description" onChange = {onChange} minLength = {5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" value = {note.tag} name="tag" onChange = {onChange} minLength = {3} required/>
          </div>
          <button type="submit" disabled = {note.title.length<3 || note.description.length<5 || note.tag.length<3} className="btn btn-primary" onClick = {handleClick}>Add Note</button>
        </form>
      </div>
  );
};

export default AddNote;