import React,{useContext} from "react";
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note , updateNote } = props;
  return (
    <div className = "col-md-3">
      <div className="card my-3 border-secondary" style={{"borderRadius":"20px"}}>
        <div className="card-body">
          <div className = "d-flex align-items-center">
          <h6 className="card-title">{note.title}</h6>
          <i className="far fa-edit mx-2" onClick = {()=>{updateNote(note)}}></i>
          <i className="far fa-trash-alt" onClick = {()=>{deleteNote(note._id);props.showAlert("Deleted note successfully","success");}}></i>
          {/* <i className="fa fa-eye mx-2" aria-hidden="true"></i> */}
          </div>
          <p className="card-text">{note.description ? note.description.slice(0,80) : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;