import mongoose from "mongoose";


function connectDb(){
    console.log(process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDb