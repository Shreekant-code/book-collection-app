import express from "express"
import connect_url from "./db/database.js";
import route from "./db/schema/Route.js/route.js";

import cors from "cors"
const app=express();
const Port = 3000;
app.use(cors({
  origin: "http://localhost:5173",  
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
const Database_url="mongodb://localhost:27017"

await connect_url(Database_url)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",route);


app.listen(Port,()=>{
    console.log(`The server is running on ${Port}`);
})