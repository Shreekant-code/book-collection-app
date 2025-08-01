import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Create.css";
import { useSnackbar } from "notistack";
export const Edit=()=>{

    const [title,settitle]=useState("");
     const [author,setauthor]=useState("")
      const [publish,setpublish]=useState("")
      const {id}=useParams();
      const navigate=useNavigate();


      const fetchdata=async(id)=>{
        try {
            const res=await axios.get(`http://localhost:3000/books/${id}`);
        console.log(res.data);
        settitle(res.data.title);
        setauthor(res.data.author);
        setpublish(res.data.publishedYear);
            
        } catch (error) {
            console.log("error");
            
        }
        
       
      }

      useEffect(()=>{
        fetchdata(id)
      },[id])
 const {enqueueSnackbar }=useSnackbar()

      const handlesubmit=(e)=>{
        e.preventDefault();
        try {
            axios.put(`http://localhost:3000/books/${id}`,{

          
                title,author,publishedYear:publish
            }
        )
         enqueueSnackbar("Book Updated Successfully",{variant:"success"});
       
            navigate("/");
            
            
            
        } catch (error) {
            
        }
        
      }
    return(
        <>
        <div className="box">
        <h2>Update Book 📚 </h2>
         
         <form onSubmit={handlesubmit}>
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
        <button type="submit">Edit</button>
      </form>
        
          </div>
        
        </>
    )
}