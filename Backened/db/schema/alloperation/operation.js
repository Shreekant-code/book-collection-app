import Book from "../schema.js";
import mongoose from "mongoose";

export const createbook=async(req,res)=>{
    try {
       const {title,author,publishedYear}=req.body;
       if(!title || !author ||!publishedYear){
        return res.status(400).send({
            message:"send all required fields:title,author,publishYear",
        });
       }

       const newbook=new Book({ title, author, publishedYear})
       const savedBook = await newbook.save();
         res.status(201).json(savedBook);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
}




export const updateBookByid=async(req,res)=>{

    try {
const {title,author,publishedYear}=req.body;
if(!title ||!publishedYear || !author){
    res.status(400).send({
        message:"send all required fields :title,author,publishyear",
    })
}
const {id}=req.params;
const result= await Book.findByIdAndUpdate(id,
     { title, author, publishedYear },
  { new: true }
);
if(!result){
    return res.status(404).json({message:"book not found"});
}
return res.status(200).json({message:"Book updated successfully"});

        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}




export const getAllbook=async(req,res)=>{
    try {
        const books= await Book.find({});
        res.status(200).json(books);

        
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }



}

export const getBookById=async(req,res)=>{

    try {
 const {id}=req.params;
         if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
       

        const books= await Book.findById(id);
        
if (!books) {
  return res.status(404).json({ message: "Book not found" });
}

res.status(200).json(books);
        
    } catch (error) {
          res.status(500).json({ message: error.message });
        
    }
}


export const deletebyid=async(req,res)=>{
    try {
        const {id}=req.params;

        const result= await Book.findByIdAndDelete(id);
if(!result){
    return res.send(404).json({message:"Not found"});
}

return res.status(200).json({message:"Book deleted successfully"});
        
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}