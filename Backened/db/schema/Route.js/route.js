import express from "express"
import { createbook, deletebyid, getAllbook, getBookById, updateBookByid } from "../alloperation/operation.js";

const route=express.Router();


route.get("/",(req,res)=>{
    res.send("hii this is the home page")
})


route.post("/books",createbook)
 route.get("/books",getAllbook);
 route.get("/books/:id",getBookById)
 route.put("/books/:id",updateBookByid)
 route.delete("/books/:id",deletebyid)

export default route;
