import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        setBooks(res.data);
      } catch (error) {
        console.error("Unable to fetch data:", error.message);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <div className="book-list-header">
        <h1>Book List</h1>
        <NavLink to={`/books/create`}>
          <IoMdAddCircleOutline className="icon-create" />
        </NavLink>
      </div>

      {books.length === 0 ? (
        <p>No DATA available</p>
      ) : (
        <div className="card-container">
          {books.map((book, index) => (
            <div className="book-card" key={book._id}>
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Year:</strong> {book.publishedYear}</p>
              <div className="card-actions">
                <NavLink to={`/books/details/${book._id}`}>
                  <IoIosInformationCircleOutline className="icon" />
                </NavLink>
                <NavLink to={`/books/edit/${book._id}`}>
                  <FaEdit className="icon" />
                </NavLink>
                <NavLink to={`/books/delete/${book._id}`}>
                  <MdDelete className="icon" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
