import mongoose from "mongoose";

const connect_url=async(Database_url)=>{
    try {
 const db_option={
    dbname:"booklist"

 }

 await mongoose.connect(Database_url,db_option);
 await mongoose.connect(Database_url, db_option);
    console.log("✅ MongoDB connection successful");
        
    } catch (error) {
        console.log(error.message);
        
    }

}

export default connect_url;