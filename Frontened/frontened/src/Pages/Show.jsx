import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Show.css"

export const Show = () => {
  const [showbook, setshowbooks] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const showdata = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/books/${id}`);
        setshowbooks(res.data);
      } catch (error) {
        console.error("Error fetching book:", error.message);
      }
    };
    showdata();
  }, [id]);

  
  if (!showbook) return <p>Loading...</p>;

  return (
    <section>
      <div className="show-box">
        <div className="side-by-side">
          <span>Id:</span>
          <span>{showbook._id}</span>
        </div>
        <div className="side-by-side">
          <span>Title:</span>
          <span>{showbook.title}</span>
        </div>
        <div className="side-by-side">
          <span>Author:</span>
          <span>{showbook.author}</span>
        </div>
        <div className="side-by-side">
          <span>Published Year :</span>
          <span>{showbook.publishedYear}</span>
        </div>
      </div>
    </section>
  );
};
