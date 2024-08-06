import { configDotenv } from "dotenv";
import connectDb from "./config/mongodb.js";
import app from "./app.js";

configDotenv()
connectDb()

app.listen(3000,()=>{
    console.log("Server Started")
}).on("error",(err)=>{
    console.log("Error in starting the server",err)
})