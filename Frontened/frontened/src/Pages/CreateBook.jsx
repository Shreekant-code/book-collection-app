import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./Create.css"
import { useSnackbar } from "notistack";


export const CreateBook=()=>{
    const[title,settitle]=useState("");
    const[author,setauthor]=useState("");
    const[publish,setpublish]=useState("");
    const navigate=useNavigate();
const {enqueueSnackbar}=useSnackbar();
  
  const handleCreate = async (e) => {
    e.preventDefault(); 

    try {
      const newBook = {
        title,
        author,
        publishedYear: publish,
      };

      await axios.post("http://localhost:3000/books", newBook);
     enqueueSnackbar("Book Created Successfully",{variant:"success"});
      navigate("/"); 
    } catch (error) {
      console.error("Error creating book:", error.message);
    }
  };




    return(
        <>
        <div className="box">
        <h2>Create Book 📚 </h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setauthor(e.target.value)} />
        </div>
        <div>
          <label>Published Year:</label>
          <input type="number" value={publish} onChange={(e) => setpublish(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
        
        </div>
        </>
    )
}