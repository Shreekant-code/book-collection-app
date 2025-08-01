import { useEffect,useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [loading,setloading]=useState(false);

  const datadelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      navigate("/"); // redirect to homepage or list page
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    datadelete(id);
  }, [id]);


useEffect(() => {
    setloading(true)
  const timeout = setTimeout(() => {
    console.log("This runs after 2 seconds");
      setloading(false)
  }, 6000);


 
  return () => clearTimeout(timeout);
}, []);

  return (
    <>
    {loading?
    (
        <p>Delete successfully</p>

    ):
  null
    
}
     
    </>
  );
};
